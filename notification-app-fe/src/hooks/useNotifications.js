import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";

export function useNotifications(filter = "All", page = 1) {

  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {

    const load = async () => {

      try {

        setLoading(true);

        const data = await fetchNotifications(filter, page);

        setNotifications(data.notifications || []);
        setTotal(data.total || 0);
        setTotalPages(data.totalPages || 1);

      } catch (err) {

        setError(err.message);

      } finally {

        setLoading(false);

      }

    };

    load();

  }, [filter, page]);

  return {
    notifications,
    total,
    totalPages,
    loading,
    error
  };

}
import java.util.*;
class PrimeFactor{
    public static boolean isPrime(int n){
        if(n<2){
            return false;
        }
        if(n==2){
            return true;
        }
        for(int i=3;i*i<=n;i+=2){
            if(n%i==0){
                return false;
            }
        }
        return true;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        List<Integer> arr=new ArrayList<>();
        for(int i=1;i*i<=n;i++){
            if(n%i==0){
                arr.add(i);
                if(i!=n/i){
                    arr.add(n/i);
                }
            }
        }
        int max=Integer.MIN_VALUE;
        
        for(int i:arr){
            if(isPrime(i) && max<i){
                    max=i;
                }
        }
        System.out.println("Largest Prime Factor : "+max);
        sc.close();
    }
}

/* 
int n=sc.nextInt();
int max=-1;
for(int i=2;i<=n;i++){
    while(n%i==0){
        max=i;
        n=n/i;
    }
}
*/
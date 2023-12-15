import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int n = input.nextInt();
        int m = input.nextInt();

        int i;
        int j;
        int l;

        int arr1[][] = new int[n][m];
        for (i = 0; i < n; i++)
            for ( j = 0; j < m; j++)
                arr1[i][j] = input.nextInt();

        m = input.nextInt();
        int k = input.nextInt();

        int arr2[][] = new int[m][k];
        for(i = 0; i < m; i++)
            for (j = 0; j < k; j++)
                arr2[i][j] = input.nextInt();

        input.close();

        int arr3[][] = new int[n][k];
        for(i = 0; i < n; i++)
            for(j = 0; j < k; j++)
                for(l = 0; l < m; l++)
                    arr3[i][j] += arr1[i][l] * arr2[l][j];

        for(i = 0; i < n; i++) {
            for (j = 0; j < k; j++)
                System.out.print(arr3[i][j] + " ");
            System.out.println();
        }
    }
}
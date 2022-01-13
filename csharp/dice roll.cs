static void Main(string[] args)
        {
            Random dice_roll = new Random();
            int min = 1;
            int max = 7;
            int[] arr = new int[11];


           
            for (int i = 0; i <= 100; i++)
            {
                int number = dice_roll.Next(min, max);
                int number2 = dice_roll.Next(min,max);
                 int sum = number + number2;
                arr[sum-2] =+ number;
                //Console.WriteLine("{0}",sum);
            }

            for (int i = 0; i < arr.Length; i++)
            {
                Console.WriteLine("{0}:{1}",i+2,arr[i]);
            }

            Console.ReadLine();
           
        }
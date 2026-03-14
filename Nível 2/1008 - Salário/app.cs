using System;
using System.Linq;

class URI {
    static void Main(string[] args)
    {
        int Number = int.Parse(Console.ReadLine());
        int WorkedHours = int.Parse(Console.ReadLine());
        double SalaryPerHour = double.Parse(Console.ReadLine());

        Console.WriteLine($"NUMBER = {Number}");
        Console.WriteLine($"SALARY = U$ {WorkedHours * SalaryPerHour:F2}");
    }
}
using System;

class URI {
    static void Main(string[] args)
    {
        string Vendor = Console.ReadLine();
        double FixedSalary = double.Parse(Console.ReadLine());
        double Total = double.Parse(Console.ReadLine());

        double FinalSalary = (Total * 0.15) + FixedSalary;

        Console.WriteLine($"TOTAL = R$ {FinalSalary:F2}");
    }
}
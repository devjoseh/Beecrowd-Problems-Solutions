using System;

class URI {
    static void Main(string[] args)
    {
        int DistanciaTotal = int.Parse(Console.ReadLine());
        double TotalCombustivel = double.Parse(Console.ReadLine());

        double Calc = DistanciaTotal / TotalCombustivel;
        Console.WriteLine($"{Calc:F3} km/l");
    }
}
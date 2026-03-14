using System;

class URI {
    static void Main(string[] args)
    {
        double Pi = 3.14159;

        double Raio = double.Parse(Console.ReadLine());

        double Calc = (4/3.0) * Pi * (Raio*Raio*Raio);

        Console.WriteLine($"VOLUME = {Calc:F3}");
    }
}
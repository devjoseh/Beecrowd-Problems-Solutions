using System; 

class URI {
    static void Main(string[] args)
    {
        double A = double.Parse(Console.ReadLine());
        double B = double.Parse(Console.ReadLine());
        double C = double.Parse(Console.ReadLine());

        double Media = ((A * 2) + (B * 3) + (C * 5)) / (2 + 3 + 5);

        Console.WriteLine($"MEDIA = {Media:F1}");
    }
}
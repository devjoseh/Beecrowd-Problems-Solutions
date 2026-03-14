using System; 
class URI {
    static void Main(string[] args) { 
        double Raio = double.Parse(Console.ReadLine());

        double Area = 3.14159 * ( Raio * Raio );

        Console.WriteLine($"A={Area:F4}");
    }
}
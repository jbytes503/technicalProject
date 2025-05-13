#include <iostream>
using namespace std;

int main()
{
    cout << "-----FizzBuzz-----" << endl;
    cout << "Enter a number: ";
    int n;
    cin >> n;
    cout << "FizzBuzz from 1 to " << n << ":" << endl;
    for (int i = 1; i <= n; i++)
    {
        string result = "";
        if (i % 3 == 0)
            result += "Fizz";
        if (i % 5 == 0)
            result += "Buzz";
        if (result.empty())
            result = to_string(i);
        cout << result << endl;
    }
}
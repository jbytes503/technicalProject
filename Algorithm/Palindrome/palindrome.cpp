#include <iostream>
#include <string>
using namespace std;

bool isPalindrome(const string &str)
{
    int left = 0;
    int right = str.length() - 1;
    while (left < right)
    {
        if (str[left] != str[right])
            return false;
        left++;
        right--;
    }
    return true;
}
string clean(const string &str)
{
    string cleaned;
    for (char c : str)
    {
        if (c != ',' && c != ' ' && c != '.' && c != '?' && c != '!' && c != ':')
        {

            cleaned += tolower(c);
        }
    }
    return cleaned;
}

int main()
{
    cout << "-----Palindrome Checker-----" << endl;
    cout << "Enter a string: ";
    string input;
    getline(cin, input);
    string cleanedInput = clean(input);
    if (isPalindrome(cleanedInput))
        cout << cleanedInput << " -> true" << endl;
    else
        cout << cleanedInput << " -> false" << endl;

    return 0;
}

/*
Je ne savais pas s’il fallait prendre en compte les symboles ou non, alors j’ai choisi une liste de symboles en me basant sur la phrase de l’exemple : "A man, a plan, a canal: Panama".
*/
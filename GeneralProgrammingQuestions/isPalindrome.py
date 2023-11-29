def is_palindrome(string):
    reversed_string = string[::-1]
    if (string == reversed_string):
        return True
    return False


input_string = input()
if (is_palindrome(input_string)):
    print("Given string '{}' is Palindrome".format(input_string))
else:
    print("Given string '{}'' is not a Palindrome".format(input_string))

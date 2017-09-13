def are_parentheses_balanced(text):
    parentheses = "[]{}()"
    stack = []

    for character in text:
        brace_position = parentheses.index(character)

        if brace_position < 0:
            continue

        if (brace_position % 2) == 0:
            stack.append(brace_position + 1)
        else:
            if (len(stack) == 0) or (stack.pop() != brace_position):
                return False

    return len(stack) == 0
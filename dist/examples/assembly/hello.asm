section .data
    msg db "Hello, DevAtlas!", 10
    len equ $ - msg
section .text
    global _start
_start:
    mov eax, 1
    mov edi, 1
    lea rsi, [rel msg]
    mov edx, len
    syscall
    mov eax, 60
    xor edi, edi
    syscall

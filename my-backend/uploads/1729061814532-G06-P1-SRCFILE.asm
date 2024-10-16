G06P1   START   1000          ; Program starts at address 1000
        LDA     X3           ; Load X3 into Accumulator
LOOP    COMP    X            ; Compare A with X
        JGE     ENDLOOP      ; If X3 >= X, exit loop
        LDA     X1           ; A = X1
        ADD     X2           ; A = X1 + X2
        STA     X3           ; X3 = X1 + X2
        LDA     X2           ; A = X2
        STA     X1           ; X1 = X2
        LDA     X3           ; A = X3
        STA     X2           ; X2 = X3
        J       LOOP         ; Jump back to LOOP
ENDLOOP LDA     X1           ; Load result into A
        STA     RESULT       ; Store result
        RSUB                  ; Return from program

X       WORD    50           ; Variable X initialized to 50
X1      WORD    1            ; Variable X1 initialized to 1
X2      WORD    1            ; Variable X2 initialized to 1
X3      WORD    0            ; Variable X3 initialized to 0
RESULT  RESW    1            ; Reserve word for RESULT
        END     START        ; End of program

f u n c t i o n   g e t B i r t h d a y   ( )   { 
     v a r   y e a r   =   d o c u m e n t . g e t E l e m e n t B y I d ( " y e a r " ) . v a l u e ; 
     v a r   m o n t h   =   d o c u m e n t . g e t E l e m e n t B y I d ( " m o n t h " ) . v a l u e ; 
     v a r   d a y   =   d o c u m e n t . g e t E l e m e n t B y I d ( " d a y " ) . v a l u e ; 
 
     r e t u r n   n e w   D a t e ( y e a r ,   m o n t h   -   1 ,   d a y ) ; 
 } 
 
 f u n c t i o n   g e t D a t e D i f f ( p r e v i o u s ,   l a t e s t )   { 
     v a r   d i f f   =   l a t e s t . g e t T i m e ( )   -   p r e v i o u s . g e t T i m e ( ) ; 
 
     v a r   d a y s   =   M a t h . f l o o r ( d i f f   /   ( 1 0 0 0   *   6 0   *   6 0   *   2 4 ) ) ; 
     d i f f   - =     d a y s   *   ( 1 0 0 0   *   6 0   *   6 0   *   2 4 ) ; 
     v a r   h o u r s   =   M a t h . f l o o r ( d i f f   /   ( 1 0 0 0   *   6 0   *   6 0 ) ) ; 
     d i f f   - =   h o u r s   *   ( 1 0 0 0   *   6 0   *   6 0 ) ; 
     v a r   m i n s   =   M a t h . f l o o r ( d i f f   /   ( 1 0 0 0   *   6 0 ) ) ; 
     d i f f   - =   m i n s   *   ( 1 0 0 0   *   6 0 ) ; 
     v a r   s e c o n d s   =   M a t h . f l o o r ( d i f f   /   ( 1 0 0 0 ) ) ; 
     d i f f   - =   s e c o n d s   *   ( 1 0 0 0 ) ; 
 
     r e t u r n   { d a y s : d a y s ,   h o u r s : h o u r s ,   m i n s : m i n s ,   s e c o n d s : s e c o n d s } ; 
 } 
 
 f u n c t i o n   c a l c u l a t e B i r t h d a y ( )   { 
     v a r   n o w   =   n e w   D a t e ( ) ; 
     v a r   b i r t h   =   g e t B i r t h d a y ( ) ; 
 
     v a r   d i f f   =   g e t D a t e D i f f ( b i r t h ,   n o w ) ; 
     v a r   m e s s a g e   =   " :~�0�!:~�n2 ��n*"g~�_; :~]NI�"   +   d i f f . d a y s   +   " L�e�:~k�:~j�g~�*":~�R�%&" ; 
 
     v a r   r e s u l t   =   d o c u m e n t . g e t E l e m e n t B y I d ( " r e s u l t " ) ; 
     r e s u l t . t e x t C o n t e n t   =   m e s s a g e ; 
     r e s u l t . s t y l e . d i s p l a y   =   " " ; 
 } 
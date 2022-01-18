package utils;

public class AreaChecker {
    public static boolean isHit(double x, double y, double r){
        /* Выполняет проверку попадания точки на координатной плоскости в заданную область.*/
        //Из-за оссобености варианта можно не проверять правый верхний угол. В него невозможно попасть.
        return isRightTop(x,y,r) || isRightBottom(x,y,r) || isLeftBottom(x,y,r);
    }
    private static boolean isRightTop(double x, double y, double r){
        return ( x >= 0 ) &&
                ( y >= 0 ) &&
                ( 2*x + y <= r );
    }
    private static boolean isRightBottom(double x, double y, double r){
        return  ( x >= 0 ) &&
                ( y <= 0 ) &&
                ( x*x + y*y <= r*r );
    }
    private static boolean isLeftBottom(double x, double y, double r){
        return  ( x <= 0 ) &&
                ( y <= 0 ) &&
                ( x >= -r ) &&
                ( y >= -r );
    }
}

package beans;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@ManagedBean
@ApplicationScoped
public class DataWrapper implements Serializable {
    private double x;
    private double y;
    private double r;
    private String result;
    private LocalDateTime current_time ;
    private double processing_time ;



    public DataWrapper(){}

    public DataWrapper(double x, double y, double r, String result, LocalDateTime current_time, double processing_time) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.result = result;
        this.current_time = current_time;
        this.processing_time = processing_time;
    }

    public double getX() {
        return x ;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getCurrent_time() {
        return current_time.format(DateTimeFormatter.ofPattern("HH:mm:ss"));
    }

    public void setCurrent_time(LocalDateTime current_time) {
        this.current_time = current_time;
    }

    public double getProcessing_time() {
        return processing_time;
    }

    public void setProcessing_time(double processing_time) {
        this.processing_time = processing_time;
    }


}

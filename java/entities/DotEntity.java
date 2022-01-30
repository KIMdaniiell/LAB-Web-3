package entities;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Table(name="dottable", schema = "s280054")
@Entity
public class DotEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "x")
    private double x;
    @Column(name = "y")
    private double y;
    @Column(name = "r")
    private double r;
    @Column(name = "prossesing")
    private double processing_time ;
    @Column(name = "result")
    private String result;
    @Column(name = "current")
    private Timestamp current_time;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getCurrent_time() {
        return current_time.toLocalDateTime();
    }

    public String  getFormatedCurrent_time() {
        return current_time.toLocalDateTime().format(DateTimeFormatter.ofPattern("HH:mm:ss"));
    }

    public void setCurrent_time(LocalDateTime current_time) {
        this.current_time = Timestamp.valueOf(current_time);
    }

    public double getX() {
        return x;
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

    public double getProcessing_time() {
        return processing_time;
    }

    public void setProcessing_time(double processing_time) {
        this.processing_time = processing_time;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }
}

package beans;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;

@ManagedBean
@ApplicationScoped
public class ClockBean {

    public String getHour() {
        return format(ZonedDateTime.now().getHour());
    }

    public String getMin() {
        return format(ZonedDateTime.now().getMinute());
    }

    public String getSec() {
        return format(ZonedDateTime.now().getSecond());
    }

    public String getDay() {
        return format(ZonedDateTime.now().getDayOfMonth());
    }

    public String getMonth() {
        return format(ZonedDateTime.now().getMonthValue());
    }

    public String getYear() {
        return format(ZonedDateTime.now().getYear());
    }

    public void setHour(String hour) {
    }

    public void setMin(String min) {
    }

    public void setSec(String sec) {
    }

    public void setDay(String day) {
    }

    public void setMonth(String month) {
    }

    public void setYear(String year) {
    }

    private String format(int val) {
        String day = String.valueOf(val);
        if (day.length() < 2) {
            day = "0" + day;
        }
        return day;
    }
}

package utils;

import beans.DataWrapper;

import java.util.LinkedList;

public class ResultTableManager {
    private LinkedList<DataWrapper> beanList;

    public ResultTableManager(){
        beanList = new LinkedList<>();
    }

    public LinkedList<DataWrapper> getBeanList() {
        return beanList;
    }

    public void setBeanList(LinkedList<DataWrapper> beanList) {
        this.beanList = beanList;
    }

    public void resetBeanList(){
        beanList.clear();
    }

    public void addDataWrapper(DataWrapper dataWrapper){
        beanList.addFirst(dataWrapper);
    }
}

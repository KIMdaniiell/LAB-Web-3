package beans;

import entities.DotEntity;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.LinkedList;

@Stateless
public class Ejbean {

    @PersistenceContext(unitName = "NewExamplePU")
    private EntityManager entityManager;

    public void loadDot(DotEntity dot) {
        entityManager.persist(dot);
        entityManager.flush();
    }
    public LinkedList getDots(){
        Query query = entityManager.createQuery("SELECT d FROM DotEntity d ORDER BY id DESC");
        LinkedList l = new LinkedList(query.getResultList());
        return l;
    }
    public void resetDots(){
        Query query = entityManager.createQuery("SELECT d FROM DotEntity d");
        LinkedList l = new LinkedList(query.getResultList());
        for (Object o : l){
            entityManager.remove(o);
        }
    }
}

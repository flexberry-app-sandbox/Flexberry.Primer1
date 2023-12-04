package Primer.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Primer.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧ
 */
@Entity(name = "IISPrimerТЧ")
@Table(schema = "public", name = "ТЧ")
public class TCH {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Строка")
    private Integer строка;

    @Column(name = "Количество")
    private Integer количество;

    @Column(name = "Сумма")
    private Double сумма;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dokument")
    @Convert("Dokument")
    @Column(name = "Документ", length = 16, unique = true, nullable = false)
    private UUID _dokumentid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dokument", insertable = false, updatable = false)
    private Dokument dokument;


    public TCH() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getСтрока() {
      return строка;
    }

    public void setСтрока(Integer строка) {
      this.строка = строка;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }

    public Double getСумма() {
      return сумма;
    }

    public void setСумма(Double сумма) {
      this.сумма = сумма;
    }


}
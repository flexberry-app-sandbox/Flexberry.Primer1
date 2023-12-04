package Primer.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Primer.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Документ
 */
@Entity(name = "IISPrimerДокумент")
@Table(schema = "public", name = "Документ")
public class Dokument {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ID")
    private Integer id;

    @Column(name = "Описание")
    private String описание;

    @OneToMany(mappedBy = "dokument", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCH> tchs;


    public Dokument() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getID() {
      return id;
    }

    public void setID(Integer id) {
      this.id = id;
    }

    public String getОписание() {
      return описание;
    }

    public void setОписание(String описание) {
      this.описание = описание;
    }


}
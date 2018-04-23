package com.explorer.explorerProject.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "Photo")
@Table(name = "photo")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Photo {

    @Id
    private String id;

    @Column(name = "business_id")
    private String businessId;

    @Column(name = "caption")
    private String caption;

    @Column(name = "label")
    private String label;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBusinessId() {
        return businessId;
    }

    public void setBusinessId(String businessId) {
        this.businessId = businessId;
    }

    public String getCaption() {
        return caption;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public Photo() {
    }

    public Photo(String businessId, String caption, String label) {
        this.businessId = businessId;
        this.caption = caption;
        this.label = label;
    }
}

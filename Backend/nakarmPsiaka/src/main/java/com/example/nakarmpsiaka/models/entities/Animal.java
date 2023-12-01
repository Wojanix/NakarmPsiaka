package com.example.nakarmpsiaka.models.entities;

import com.example.nakarmpsiaka.models.enums.AnimalType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Animal {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne
    User user;

    private double longitude;
    private double latitude;
    private String name;
    private AnimalType type;
    private String breed;
    private String info;
    private String imgUrl;
}

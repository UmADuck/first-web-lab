package com.kdb.book;



import jakarta.persistence.*;

@Entity
@Table
public class Book {
    @Id
    @SequenceGenerator(
            name = "book_sequence",
            sequenceName = "book_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "book_sequence"
    )
    private Integer id;
    private String name;
    private Integer pages;
    private Integer price;

    private String img;

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public Book(Integer id,
                String name,
                Integer pages,
                Integer price,
                String img) {
        this.id = id;
        this.name = name;
        this.pages = pages;
        this.price = price;
        this.img = img;
    }

    public Book(String name,
                Integer pages,
                Integer price,
                String img) {
        this.name = name;
        this.pages = pages;
        this.price = price;
        this.img = img;

    }

    public Book() {

    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Integer getPages() {
        return pages;
    }

    public Integer getPrice() {
        return price;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPages(Integer pages) {
        this.pages = pages;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", pages=" + pages +
                ", price=" + price +
                ", img='" + img + '\'' +
                '}';
    }
}

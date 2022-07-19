import React from "react";
import "./styles.css";

export default function FeaturedPost() {
    return (
        <div className="featured-post-container">
            <div>
                <img src="https://images.unsplash.com/photo-1618171889969-0feeb769fe78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
            </div>

            <div>
                <p className="featured-post-date">July, 24, 2020</p>

                <h2 className="featured-post-title">Lorem ipsum dolor</h2>

                <p className="featured-post-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu nunc et nulla consectetur suscipit ac vel diam. Mauris dignissim augue accumsan neque auctor, at fringilla diam laoreet. Cras blandit massa ut laoreet feugiat. Mauris scelerisque velit nec gravida feugiat. Donec sed odio vel felis ultrices imperdiet quis sit amet orci. Fusce orci nisl, sagittis nec aliquet quis, ultrices nec diam. Nam pharetra metus ac risus facilisis molestie. Curabitur purus nisi, semper quis varius vel, elementum vitae ipsum. Aenean sit amet facilisis arcu, vitae malesuada orci.
                    Vivamus pharetra mi in massa dapibus, gravida semper sapien semper. Duis auctor lorem ut semper lacinia. Nulla at sagittis velit, eget ornare dolor. Morbi nec dui at turpis vehicula lacinia. Mauris commodo faucibus tortor, eget vulputate lectus. Nam bibendum nisl nec felis aliquet, et mollis felis pellentesque. Etiam congue in elit ut luctus. Nulla commodo, dui vitae aliquet condimentum, nisi nunc cursus neque, ac ultricies arcu mauris ut enim. Duis vestibulum imperdiet pharetra. Aenean finibus, felis ut faucibus rutrum, dui est sodales libero, quis rutrum tellus odio convallis neque. Sed varius, lacus sed suscipit lacinia, massa lectus vehicula justo, in convallis metus orci at purus. Ut faucibus, risus eu congue fringilla, quam justo cursus massa, id cursus odio dolor ut neque. Donec eu augue varius, lobortis nibh at, mollis quam. Ut dignissim lorem vitae lacus pharetra dapibus. Duis dictum bibendum mauris ut pellentesque.
                </p>
            </div>
        </div>
    )
}
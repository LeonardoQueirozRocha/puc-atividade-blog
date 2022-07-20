import React from "react";
import FeaturedPost from "../../components/featured-post";
import PostList from "../../components/post-list";

export default function Home() {
    const posts = [
        {
            image: "https://images.unsplash.com/photo-1562825606-7e7187e44a83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            date: "May, 09, 2022",
            title: "Teste",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies massa nec nibh volutpat, sit amet tempus purus elementum. Integer semper sapien eget odio aliquet, id rhoncus ligula consectetur. Phasellus ac molestie purus. Quisque congue, enim id pretium scelerisque, lorem dolor molestie ligula, eget molestie nisi mauris sed orci. Quisque sodales, diam eget finibus volutpat, sapien purus volutpat nunc, vel pharetra neque nunc vitae risus. Vestibulum venenatis velit et nisi luctus fringilla. Etiam consectetur finibus congue. Aenean quis tempus risus. Nullam id aliquam metus. Integer volutpat, justo non tempus rutrum, dui urna finibus mauris, molestie sagittis quam lorem eu ligula. Sed consequat urna et arcu lobortis posuere. Nunc mollis turpis ut tincidunt imperdiet. Etiam non lobortis lectus, a auctor ipsum."
        },
        {
            image: "https://images.unsplash.com/photo-1653564142033-ab3532091515?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80",
            date: "May, 15, 2022",
            title: "Teste 1",
            description: "Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio.A ordem dos tratores não altera o pão duris.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!"
        },
        {
            image: "https://images.unsplash.com/photo-1657524433787-a30cefc92661?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
            date: "Feb, 20, 2022",
            title: "Teste 3",
            description: "Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Diuretics paradis num copo é motivis de denguis.Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis."
        }
    ];

    return (
        <div>
            {
                posts && <FeaturedPost post={posts[0]}/>
            }
            <PostList posts={posts} />
        </div>
    )
}
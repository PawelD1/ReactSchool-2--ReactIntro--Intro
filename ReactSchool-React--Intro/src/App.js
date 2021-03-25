import React from 'react';

const styles = {
  margin: "5% 30%",
  backgroundColor: "#bdc3c7",
  padding: 15,
  textAlign: "center",
  el: {
    background: "#1abc9c"
  }
}

export default function App() {
  const posts = [
    { id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
    { id: 2, title: 'Wszyscy zazdroszczą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
    { id: 3, title: 'Adam Małysz Zgolił wąs',
      intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
    }
  ]
  return (
    <div>
    {posts.map((el) => (
        <BlogTile key={el.id} {...el} />
    ))}
    </div>
  );
}

const splitText =  (text) =>
  text.length > 25 ? text.slice(0, 25).concat('...') : text;

function BlogTile({title, intro}) {
  return (
    <div style={styles}>
      <h2>{title}</h2>
      <p style={styles.el}>{splitText(intro)}</p>
    </div>
  );
}
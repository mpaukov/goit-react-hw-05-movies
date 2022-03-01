function HomePage(props) {
  console.log(props.data);
  return (
    <>
      {props.data.map(({ original_title, poster_path, title }) => {
        return (
          <p key={poster_path}>
            {`Original title: ${original_title}, title:  ${title}`}
          </p>
        );
      })}
    </>
  );
}

export { HomePage };

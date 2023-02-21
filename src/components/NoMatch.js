const NoMatch = () => {
  return (
    <div style={match}>
      <h1>No Match Found</h1>
      <h6>You can select the genre of the movie you are searching for.</h6>
    </div>
  );
}

const match = {
    color: '#fff',
    textAlign: 'center'
}

export default NoMatch;

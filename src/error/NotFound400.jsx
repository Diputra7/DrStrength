import Error from '../components/Error';

export default function NotFound400() {
  return (
    <Error
      code="400"
      title="Not Found"
      message="Oops! It seems you followed a broken backlink."
      imageSrc="/img/error.png"
      buttonText="← Back To Home"
      buttonLink="/"
    />
  );
}

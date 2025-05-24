import Error from '../components/Error';

export default function NotFound403() {
  return (
    <Error
      code="403"
      title="Forbidden"
      message="Access to this resource is denied."
      imageSrc="/img/error.png"
      buttonText="← Back To Home"
      buttonLink="/"
    />
  );
}

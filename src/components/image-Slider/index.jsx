import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function ImageSlider({ url, page = 2, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return;

    async function fetchImages() {
      setLoading(true);
      setErrorMsg(null);
      try {
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        const data = await response.json();
        setImages(data);
      } catch (e) {
        setErrorMsg(e.message);
      } finally {
        setLoading(false);      // runs on success AND failure
      }
    }

    fetchImages();
  }, [url, page, limit]);

  const handlePrevious = () =>
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  if (loading) return <div>Loading Data! Please wait…</div>;
  if (errorMsg) return <div>Error occurred! {errorMsg}</div>;

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
        role="button"
        aria-label="Previous image"
      />

      {images.length > 0 &&
        images.map((imageItem, index) => (
          <img
            key={imageItem.id}
            alt={imageItem.author}
            src={imageItem.download_url}
            className={
              currentSlide === index
                ? "current-image"
                : "current-image hide-current-image"
            }
          />
        ))}

      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
        role="button"
        aria-label="Next image"
      />

      <span className="circle-indicators">
        {images.length > 0 &&
          images.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={
                currentSlide === index
                  ? "class-indicator active"
                  : "class-indicator"
              }
            />
          ))}
      </span>
    </div>
  );
}
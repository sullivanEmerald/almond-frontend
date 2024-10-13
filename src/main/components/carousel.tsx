import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const UseCarousel = () => {
  return (
    <>
      <div>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              
            </CarouselItem>
            <CarouselItem>

            </CarouselItem>
            <CarouselItem>

            </CarouselItem>
          </CarouselContent> 
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};



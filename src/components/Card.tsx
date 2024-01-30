import { useAppDispatch } from "@/lib/hooks";
import LawyerCard from "./LawyerCard";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { setLawyerDetails } from "@/slices/controllerSlice";
import { useRouter } from "next/navigation";

const lawyers = [
  {
    name: "John Doe",
    title: "Immigrant Consultant",
    description:
      "John Doe specializes in providing expert guidance as an Immigrant Consultant. He is dedicated to helping individuals navigate the complexities of immigration and support throughout the process.",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=880&h=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Emily White",
    title: "Senior Attorney",
    description:
      "Emily White is a seasoned legal professional, serving as a Senior Attorney. Her commitment to excellence is evident in her work, where she brings a wealth of legal expertise to the table.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=880&h=880&auto=format&fit=crop&crop=faces&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Michael Johnson",
    title: "Legal Consultant",
    description:
      "Michael Johnson bringsextensive knowledge and innovative approach set him apart, allowing him to provide valuable insights and strategic solutions,committed to delivering legal consulting services.",
    imageUrl:
      "https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?q=80&w=880&h=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jane Smith",
    title: "Trial Lawyer",
    description:
      "Jane Smith is a highly skilled Trial Lawyer known for her prowess in the courtroom. With a passion for justice, Jane tirelessly advocates for her clients, ensuring their rights are protected. ",
    imageUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
];

function Card() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleContactClick = (index: number) => {
    dispatch(
      setLawyerDetails({
        lawyerName: lawyers[index].name,
        jobTitle: lawyers[index].title,
        imageUrl: lawyers[index].imageUrl,
      })
    );
    router.push("/chat");
  };

  return (
    <Carousel className="container mx-auto p-6">
      <CarouselContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {lawyers.map((lawyer, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <LawyerCard
              name={lawyer.name}
              title={lawyer.title}
              description={lawyer.description}
              imageUrl={lawyer.imageUrl}
              onClickContact={handleContactClick}
              index={index}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default Card;

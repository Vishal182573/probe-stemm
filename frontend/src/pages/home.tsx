import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GraduationCap, Users, Lightbulb } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section with Carousel */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="container mx-auto px-4">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                      Connect, Learn, Grow
                    </h1>
                    <p className="text-xl mb-6">
                      Extend your learning beyond classroom walls with Probe
                      Stemm.
                    </p>
                    <div className="flex space-x-4">
                      <Button
                        variant="default"
                        size="lg"
                        className="bg-white text-orange-500 hover:bg-orange-100"
                      >
                        Join as Student
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="text-white border-white hover:bg-white hover:text-orange-500"
                      >
                        Join as Teacher
                      </Button>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <img
                      src="/api/placeholder/600/400"
                      alt="Learning Illustration"
                      className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Connect, stay informed and learn no matter where you are
                  </h2>
                  <p className="text-xl mb-6">
                    Probe Stemm brings education to your fingertips
                  </p>
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-white text-orange-500 hover:bg-orange-100"
                  >
                    Get Started
                  </Button>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Features of Probe Stemm
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<GraduationCap className="w-12 h-12 text-orange-500" />}
              title="Expand Your Knowledge"
              description="Access a wide range of courses and resources to broaden your horizons."
            />
            <FeatureCard
              icon={<Users className="w-12 h-12 text-orange-500" />}
              title="Connect with Mentors"
              description="Engage with experienced educators and industry professionals."
            />
            <FeatureCard
              icon={<Lightbulb className="w-12 h-12 text-orange-500" />}
              title="Share Your Ideas"
              description="Collaborate on projects and showcase your innovations to the community."
            />
          </div>
        </div>
      </section>

      {/* Why Probe Stemm Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Probe Stemm?
          </h2>
          <p className="text-xl text-center mb-12">
            PROBE STEMM allows you to extend the interactions among students and
            faculty beyond the bounds of classroom walls and scheduled times
          </p>
          <div className="text-center">
            <Button
              variant="default"
              size="lg"
              className="bg-orange-500 text-white hover:bg-orange-600"
            >
              Register Now
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-2xl mx-auto"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Probe Stemm?</AccordionTrigger>
              <AccordionContent>
                Probe Stemm is an innovative educational platform that connects
                students, teachers, and mentors, allowing for continuous
                learning beyond traditional classroom settings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Who can join Probe Stemm?</AccordionTrigger>
              <AccordionContent>
                Probe Stemm is open to students, teachers, and industry
                professionals interested in STEM fields. Anyone looking to
                expand their knowledge or share their expertise is welcome.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Is there a cost to use PROBE STEMM?
              </AccordionTrigger>
              <AccordionContent>
                Probe Stemm offers both free and premium features. Basic access
                is free, while some advanced features and courses may require a
                subscription. Check our pricing page for more details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How can I search for specific topics or experts?
              </AccordionTrigger>
              <AccordionContent>
                Probe Stemm has a powerful search function that allows you to
                find topics, courses, mentors, and other users based on
                keywords, skills, and areas of expertise. You can also use
                filters to refine your search results.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <Card>
    <CardContent className="p-6 text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

export default HomePage;

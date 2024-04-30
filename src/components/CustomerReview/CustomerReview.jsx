const CustomerReview = () => {
  const testimonials = [
    {
      avatar: "https://i.postimg.cc/4ythxcds/default.webp",
      name: "Martin Escobar",
      title: "Travel Blogger",
      quote:
        "Exploring Southeast Asia was a game-changer! Thanks to Serenity Seekers, I discovered hidden waterfalls, tasted exotic street food, and met incredible locals. 10/10 recommend!",
    },
    {
      avatar: "https://i.postimg.cc/fL19sCM8/user-3.png",
      name: "Alex Robert",
      title: "Adventure Enthusiast",
      quote:
        "Southeast Asia exceeded all my expectations! From biking through ancient ruins to diving in crystal-clear waters, every day was a thrill. Serenity Seekers made it effortless.",
    },
    {
      avatar: "https://i.postimg.cc/BZ1FgrCk/user-2.png",
      name: "Karim Ahmed",
      title: "Photographer",
      quote:
        "Capturing the beauty of Southeast Asia was a photographer's dream. Thanks to Serenity Seekers, I explored stunning landscapes and vibrant cultures. Highly recommend for fellow creatives!",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-3xl font-semibold sm:text-4xl">
            See what others saying about us
          </h3>
          <p className="mt-3">
            Explore the captivating experiences of fellow travelers who have
            journeyed through Southeast Asia with us. From thrilling adventures
            to cultural discoveries and culinary delights, read their stories
            and get inspired for your own adventure. Let their reviews guide you
            in creating unforgettable memories in Southeast Asia!
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li key={idx} className="p-4 rounded-xl shadow-md border">
                <figure>
                  <div className="flex items-center gap-x-4">
                    <div className="w-16 h-16">
                      <img
                        src={item.avatar}
                        className="h-full w-full object-cover object-center rounded-full"
                      />
                    </div>
                    <div>
                      <span className="block  font-semibold">{item.name}</span>
                      <span className="block  text-sm mt-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-6 ">{item.quote}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;

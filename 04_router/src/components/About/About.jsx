import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://imgs.search.brave.com/6NagroBa50wx6uMH3agDtSxRFpH5r-oPnuyD6WccW3s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXRj/aGVsbGJsYWNrLmNv/bS9jZG4vc2hvcC9j/b2xsZWN0aW9ucy9G/b2xkaW5nUmliYm9u/X1BlYWNvY2tCbHVl/X09yYW5nZVNvZmFf/TW9ja1VwLmpwZz92/PTE2ODUxMTkxNzYm/d2lkdGg9MjQwMA"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
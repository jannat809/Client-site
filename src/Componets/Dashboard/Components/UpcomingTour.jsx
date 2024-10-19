const UpcomingTour = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Upcoming Tour</h1>

      <div className="flex justify-center items-center py-20">
        <div className="card bg-base-100 w-96 shadow-xl ">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTour;

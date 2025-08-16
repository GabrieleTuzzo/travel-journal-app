import { useParams } from 'react-router-dom';

export default function Note() {
    const { noteName } = useParams();

    return (
        <div className="justify-center flex">
            <form className="bg-white text-black w-full p-4 rounded-lg max-w-2xl overflow-clip mt-10 mb-150">
                <h1>{noteName}</h1>

                <h4>Tags:</h4>
                <input
                    type="text"
                    name="tags"
                    placeholder="Enter tags"
                    className="border p-2 rounded w-full mb-4"
                />

                <h2>Media</h2>
                <textarea
                    name="media"
                    placeholder="Describe media"
                    className="border p-2 rounded w-full mb-4"
                ></textarea>

                <h2>Location</h2>
                <input
                    type="text"
                    name="location"
                    placeholder="Enter location details"
                    className="border p-2 rounded w-full mb-4"
                />

                <h2>Mood</h2>
                <textarea
                    name="mood"
                    placeholder="Describe mood"
                    className="border p-2 rounded w-full mb-4"
                ></textarea>

                <h2>Positive Remarks</h2>
                <textarea
                    name="positiveRemarks"
                    placeholder="Enter positive remarks"
                    className="border p-2 rounded w-full mb-4"
                ></textarea>

                <h2>Negative Remarks</h2>
                <textarea
                    name="negativeRemarks"
                    placeholder="Enter negative remarks"
                    className="border p-2 rounded w-full mb-4"
                ></textarea>

                <h2>Physical Effort</h2>
                <input
                    type="number"
                    name="physicalEffort"
                    placeholder="Enter physical effort details"
                    className="border p-2 rounded w-full mb-4"
                />

                <h2>Monetary Effort</h2>
                <input
                    type="number"
                    name="monetaryEffort"
                    placeholder="Enter monetary effort details"
                    className="border p-2 rounded w-full mb-4"
                />

                <h3>Total Money Spent</h3>
                <input
                    type="number"
                    name="totalMoneySpent"
                    placeholder="Enter total money spent"
                    className="border p-2 rounded w-full mb-4"
                />
            </form>
        </div>
    );
}

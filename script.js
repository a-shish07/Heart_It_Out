
  document.querySelector("button").addEventListener("click", () => {
    alert("Form submitted successfully!");
  });

  fetch("https://api.tvmaze.com/search/shows?q=cars")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("content");

            
            const limitedData = data.slice(0, 3);

            limitedData.forEach(item => {
                const show = item.show;
                const card = `
                    <div class="inside-card">
                        <div class="cardd">
                            <div class="carddd">
                                <div class="card-type">${show.type || "N/A"}</div>
                                <h6 class="mb-4">${show.name || "Unknown Name"}</h6>
                                <p>${show.summary || "No summary available"}</p>
                                <p class="price mt-5">
                                    Price: <span class="old-price">4999/-</span> <br><span class="new-price">4499/-</span>
                                </p>
                            </div>
                            <button class="clickk btn btn-secondary">${show.officialSite ? "Visit Site" : "Click"}</button>
                        </div>
                    </div>
                `;
                container.innerHTML += card;
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
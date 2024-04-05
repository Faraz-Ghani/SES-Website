import CardList23 from './cardList23';
import CardList22 from './cardList22';
import CardList21 from './cardList21';
import CardList20 from './cardList20';
import CardList19 from './cardList19';
import CardList24 from './cardList24';
const Team = () => {
  return (
    <>
      {/* teams section begins */}
      <section class="teams" id='team'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="team-head" >Our Teams</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="teams-tabs">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-team24" type="button" role="tab" aria-controls="pills-home" aria-selected="true">2023-2024</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-team23" type="button" role="tab" aria-controls="pills-home" aria-selected="false">2022-2023</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-team22" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">2021-2022</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-team21" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">2020-2021</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-team20" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">2019-2020</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-team19" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">2018-2019</button>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-team24" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                    <CardList24 />
                  </div>
                  <div class="tab-pane fade" id="pills-team23" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                    <CardList23 />
                  </div>
                  <div class="tab-pane fade" id="pills-team22" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                    <CardList22 />
                  </div>
                  <div class="tab-pane fade" id="pills-team21" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                    <CardList21 />
                  </div>
                  <div class="tab-pane fade" id="pills-team20" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                    <CardList20 />
                  </div>
                  <div class="tab-pane fade" id="pills-team19" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                    <CardList19 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* teams section ends */}
    </>
  )
}

export default Team;
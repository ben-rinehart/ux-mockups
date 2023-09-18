import React from "react";
import {Avatar, Badge, Button, ButtonGroup, Card, Formgroup, Icon, IconCheck, Leaders, LeadersItem, Link, List, Rating, Stat, Textfield, Tooltip } from "@csg_actuarial/csg-design";

// Custom component
import Ribbon from "../components/Ribbon";

export default {
  title: "Sandbox",
}

export const Filters = (args) => (
  <div className="container">
    <div className="row mb-2 align-items-end">
      <div className="col">
        <Avatar avatarBgColor="bg-secondary" avatarShape="rounded-circle" avatarSize="csg-avatar-sm"><Icon iconStyle="fas" iconName="fa-search" /></Avatar>
        <Link linkHref="" linkClass="ml-2 mr-3 small">Omaha, NE 68154</Link>
        <Link linkHref="" linkClass="mr-3 small">Medicare Advantage 2023</Link>
        <ButtonGroup btnGroupLayout="btn-group">
          <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-user" isFixedWidth /><Icon iconStyle="fas" iconName="fa-plus" isFixedWidth /></Button>
          <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-prescription-bottle-medical" isFixedWidth /><Icon iconStyle="fas" iconName="fa-plus" isFixedWidth /></Button>
          <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-file-prescription" isFixedWidth /><Icon iconStyle="fas" iconName="fa-plus" isFixedWidth /></Button>
          <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-stethoscope" isFixedWidth /><Icon iconStyle="fas" iconName="fa-plus" isFixedWidth /></Button>
        </ButtonGroup>

        <Tooltip tipDirection="bottom" tipText="Advanced Filters">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="ml-3"><Icon iconStyle="fas" iconName="fa-sliders" isFixedWidth /></Button>
        </Tooltip>
      </div>
      <div className="col-2 text-right">
        {/*<Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-angle-down" /> Expand All</Button>{' '}*/}
        <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-arrow-down-short-wide" /> Sort by Price</Button>
      </div>
    </div>
    <Card></Card>

    <hr />
    <div className="row mb-2 align-items-center">
      <div className="col">
        <Avatar avatarBgColor="bg-secondary" avatarShape="rounded-circle" avatarSize="csg-avatar-sm"><Icon iconStyle="fas" iconName="fa-search" /></Avatar>
        <Link linkHref="" linkClass="ml-2 mr-3 small">Omaha, NE 68154</Link>
        <Link linkHref="" linkClass="mr-3 small">Medicare Advantage 2023</Link>

        <ButtonGroup btnGroupLayout="btn-group">
          <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-user" isFixedWidth /> Mr. Jim Business</Button>
          <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-prescription-bottle-medical" isFixedWidth /> <sup>9</sup></Button>
          <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-file-prescription" isFixedWidth /> <sup>1</sup></Button>
          <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-stethoscope" isFixedWidth /> <sup>3</sup></Button>
        </ButtonGroup>
        <Tooltip tipDirection="bottom" tipText="Advanced Filters">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="ml-2"><Icon iconStyle="fas" iconName="fa-sliders" isFixedWidth /></Button>
        </Tooltip>
      </div>
      <div className="col-2 text-right">
        {/*<Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-angle-down" /> Expand All</Button>{' '}*/}
        <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-arrow-down-short-wide" /> Sort by Price</Button>
      </div>
    </div>
    <Card></Card>
  </div>
);

export const SearchResults = (args) => (
  <div className="container">
    <Card>
      <div className="row">
        <div className="col">
          <span className="font-weight-bold h5">Humana</span> H0028-053-003{' '}
          <Badge badgeType="badge-primary">Health &amp; Drug Coverage</Badge><br />
          <span className="text-muted">Humana Gold Plus H0028-053 (HMO)</span>
          <Rating
            ratingColor="text-warning"
            ratingEmptyIcon="fa-star"
            ratingEmptyIconStyle="far"
            ratingHalfIcon="fa-star-half-alt"
            ratingHalfIconStyle="fas"
            ratingID="rating-id"
            ratingIcon="fa-star"
            ratingIconStyle="fas"
            ratingLabel="Star Rating "
            ratingMax={5}
            ratingSecondaryColor="text-muted"
            ratingTitle="2.5 out of 5 Dentists Approve!"
            ratingValue={5}
          />

          <Badge badgeType="badge-success">1 of 1 Rx Drugs</Badge>{' '}
          <Badge badgeType="badge-success">1 of 1 Pharmacies</Badge>{' '}
          <Badge badgeType="badge-success">3 of 3 Providers</Badge>
        </div>
        <div className="col-7 text-center">
          <div className="d-md-flex align-items-end border">
            <div className="flex-fill">
              <Stat
                statData="$12.60"
                statText="monthly premium"
                statType="primary"
                isSmall
              />
            </div>
            <div className="flex-fill">
              <Stat
                statData="0.00"
                statText="Yearly Drug & Premium"
                statType="primary"
                isSmall
              />
            </div>
            <div className="flex-fill">
              <div className="d-block bg-light text-center">
                <small>HEALTH OUT-OF-POCKET MAX / YEAR</small>
              </div>
              <div className="d-block border-left">
                  <div className="form-row">
                    <div className="col-lg pt-2">
                      <Stat
                        statData="$5,900"
                        statText="in-network"
                        isSmall={true}
                        statType="success" />
                    </div>
                    <div className="col-lg pt-2">
                      <Stat
                        statData="$8,950"
                        statText="out-of-network"
                        isSmall={true}
                        statType="danger" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-2" />
      <div className="form-row">
        <div className="col">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
          {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Highlights</Button>*/}
          <Button btnStyle="btn-link" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Plan Highlights</Button>
        </div>
        <div className="col-2 text-right">
          <IconCheck
            checkIcon="fa-eye"
            hasIcon
            checkSize="btn-sm"
          >
            Compare
          </IconCheck>
        </div>
        <div className="col-3 text-right">
          <Button btnStyle="btn-primary" btnSize="btn-sm" isFullWidth btnClass="px-5">Enroll Now</Button>
        </div>
      </div>
    </Card>
    <Card>
      <div className="row">
        <div className="col">
          <span className="font-weight-bold h5">Humana</span> H0028-053-003{' '}
          <Badge badgeType="badge-primary">Health &amp; Drug Coverage</Badge><br />
          <span className="text-muted">Humana Gold Plus H0028-053 (HMO)</span>
          <Rating
            ratingColor="text-warning"
            ratingEmptyIcon="fa-star"
            ratingEmptyIconStyle="far"
            ratingHalfIcon="fa-star-half-alt"
            ratingHalfIconStyle="fas"
            ratingID="rating-id"
            ratingIcon="fa-star"
            ratingIconStyle="fas"
            ratingLabel="Star Rating Unavailable"
            ratingSecondaryColor="text-muted"
          />

          <Badge badgeType="badge-danger">0 of 1 Rx Drugs</Badge>{' '}
          <Badge badgeType="badge-danger">0 of 1 Pharmacies</Badge>{' '}
          <Badge badgeType="badge-danger">0 of 3 Providers</Badge>
        </div>
        <div className="col-7 text-center">
          <div className="d-md-flex align-items-end border">
            <div className="flex-fill">
              <Stat
                statData="$0.00"
                statText="monthly premium"
                statType="primary"
                isSmall
              />
            </div>
            <div className="">
              <div className="d-block bg-light text-center">
                <small className="px-3">HEALTH OUT-OF-POCKET MAX / YEAR</small>
              </div>
              <div className="d-block border-left">
                  <div className="form-row">
                    <div className="col-lg pt-2">
                      <Stat
                        statData="- -"
                        statText="Not Applicable"
                        isSmall={true}
                        statType="muted" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-2" />
      <div className="form-row">
        <div className="col">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
          {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Highlights</Button>*/}
          <Button btnStyle="btn-link" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Plan Highlights</Button>
        </div>
        <div className="col-2 text-right">
          <IconCheck
            checkIcon="fa-eye"
            hasIcon
            checkSize="btn-sm"
          >
            Compare
          </IconCheck>
        </div>
        <div className="col-3 text-right">
          <Button btnStyle="btn-primary" btnSize="btn-sm" isFullWidth btnClass="px-5">Enroll Now</Button>
        </div>
      </div>
    </Card>
    <Card>
      <div className="row">
        <div className="col">
          <span className="font-weight-bold h5">Humana</span> H0028-053-003{' '}
          <Badge badgeType="badge-primary">Health &amp; Drug Coverage</Badge><br />
          <span className="text-muted">Humana Gold Plus H0028-053 (HMO)</span>
          <Rating
            ratingColor="text-warning"
            ratingEmptyIcon="fa-star"
            ratingEmptyIconStyle="far"
            ratingHalfIcon="fa-star-half-alt"
            ratingHalfIconStyle="fas"
            ratingID="rating-id"
            ratingIcon="fa-star"
            ratingIconStyle="fas"
            ratingLabel="Star Rating "
            ratingMax={5}
            ratingSecondaryColor="text-muted"
            ratingTitle="2.5 out of 5 Dentists Approve!"
            ratingValue={2.5}
          />

          <Badge badgeType="badge-success">1 of 1 Rx Drugs</Badge>{' '}
          <Badge badgeType="badge-danger">0 of 1 Pharmacies</Badge>{' '}
          <Badge badgeType="badge-warning">2 of 3 Providers</Badge>
        </div>
        <div className="col-7 text-center">
          <div className="d-md-flex align-items-end border">
            <div className="flex-fill">
              <Stat
                statData="$12.60"
                statText="monthly premium"
                statType="primary"
                isSmall
              />
            </div>
            <div className="flex-fill">
              <Stat
                statData="0.00"
                statText="Yearly Drug & Premium"
                statType="primary"
                isSmall
              />
            </div>
            <div className="flex-fill">
              <div className="d-block bg-light text-center">
                <small>HEALTH OUT-OF-POCKET MAX / YEAR</small>
              </div>
              <div className="d-block border-left">
                  <div className="form-row">
                    <div className="col-lg pt-2">
                      <Stat
                        statData="$5,900"
                        statText="in-network"
                        isSmall={true}
                        statType="success" />
                    </div>
                    <div className="col-lg pt-2">
                      <Stat
                        statData="$8,950"
                        statText="out-of-network"
                        isSmall={true}
                        statType="danger" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-2" />
      <div className="form-row">
        <div className="col">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
          {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Highlights</Button>*/}
          <Button btnStyle="btn-link" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Plan Highlights</Button>
        </div>
        <div className="col-2 text-right">
          <IconCheck
            checkIcon="fa-eye"
            hasIcon
            checkSize="btn-sm"
          >
            Compare
          </IconCheck>
        </div>
        <div className="col-3 text-right">
          <Button btnStyle="btn-primary" btnSize="btn-sm" isFullWidth btnClass="px-5">Enroll Now</Button>
        </div>
      </div>
    </Card>
    <Card>
      <div className="row">
        <div className="col">
          <span className="font-weight-bold h5">Humana</span> H0028-053-003{' '}
          <Badge badgeType="badge-primary">Health &amp; Drug Coverage</Badge><br />
          <span className="text-muted">Humana Gold Plus H0028-053 (HMO)</span>
          <Rating
            ratingColor="text-warning"
            ratingEmptyIcon="fa-star"
            ratingEmptyIconStyle="far"
            ratingHalfIcon="fa-star-half-alt"
            ratingHalfIconStyle="fas"
            ratingID="rating-id"
            ratingIcon="fa-star"
            ratingIconStyle="fas"
            ratingLabel="Star Rating "
            ratingMax={5}
            ratingSecondaryColor="text-muted"
            ratingTitle="2.5 out of 5 Dentists Approve!"
            ratingValue={2.5}
          />

          <Badge badgeType="badge-success">1 of 1 Rx Drugs</Badge>{' '}
          <Badge badgeType="badge-danger">0 of 1 Pharmacies</Badge>{' '}
          <Badge badgeType="badge-warning">2 of 3 Providers</Badge>
        </div>
        <div className="col-7 text-center">
          <div className="d-md-flex align-items-end border">
            <div className="flex-fill">
              <Stat
                statData="$12.60"
                statText="monthly premium"
                statType="primary"
                isSmall
              />
            </div>
            <div className="flex-fill">
              <Stat
                statData="0.00"
                statText="Yearly Drug & Premium"
                statType="primary"
                isSmall
              />
            </div>
            <div className="flex-fill">
              <div className="d-block bg-light text-center">
                <small>HEALTH OUT-OF-POCKET MAX / YEAR</small>
              </div>
              <div className="d-block border-left">
                  <div className="form-row">
                    <div className="col-lg pt-2">
                      <Stat
                        statData="$5,900"
                        statText="in-network"
                        isSmall={true}
                        statType="success" />
                    </div>
                    <div className="col-lg pt-2">
                      <Stat
                        statData="$8,950"
                        statText="out-of-network"
                        isSmall={true}
                        statType="danger" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-2" />
      <div className="form-row">
        <div className="col">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
          {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Highlights</Button>*/}
          <Button btnStyle="btn-link" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Plan Highlights</Button>
        </div>
        <div className="col-2 text-right">
          <IconCheck
            checkIcon="fa-eye"
            hasIcon
            checkSize="btn-sm"
          >
            Compare
          </IconCheck>
        </div>
        <div className="col-3 text-right">
          <Button btnStyle="btn-primary" btnSize="btn-sm" isFullWidth btnClass="px-5">Enroll Now</Button>
        </div>
      </div>
    </Card>
    <Card>
      <div className="row">
        <div className="col">
          <span className="font-weight-bold h5">Humana</span> H0028-053-003{' '}
          <Badge badgeType="badge-primary">Health &amp; Drug Coverage</Badge><br />
          <span className="text-muted">Humana Gold Plus H0028-053 (HMO)</span>
          <Rating
            ratingColor="text-warning"
            ratingEmptyIcon="fa-star"
            ratingEmptyIconStyle="far"
            ratingHalfIcon="fa-star-half-alt"
            ratingHalfIconStyle="fas"
            ratingID="rating-id"
            ratingIcon="fa-star"
            ratingIconStyle="fas"
            ratingLabel="Star Rating "
            ratingMax={5}
            ratingSecondaryColor="text-muted"
            ratingTitle="2.5 out of 5 Dentists Approve!"
            ratingValue={2.5}
          />

          <Badge badgeType="badge-success">1 of 1 Rx Drugs</Badge>{' '}
          <Badge badgeType="badge-danger">0 of 1 Pharmacies</Badge>{' '}
          <Badge badgeType="badge-warning">2 of 3 Providers</Badge>
        </div>
        <div className="col-7 text-center">
          <div className="d-md-flex align-items-end border">
            <div className="flex-fill">
              <Stat
                statData="$12.60"
                statText="monthly premium"
                statType="primary"
                isSmall
              />
            </div>
            <div className="flex-fill">
              <Stat
                statData="0.00"
                statText="Yearly Drug & Premium"
                statType="primary"
                isSmall
              />
            </div>
            <div className="flex-fill">
              <div className="d-block bg-light text-center">
                <small>HEALTH OUT-OF-POCKET MAX / YEAR</small>
              </div>
              <div className="d-block border-left">
                  <div className="form-row">
                    <div className="col-lg pt-2">
                      <Stat
                        statData="$5,900"
                        statText="in-network"
                        isSmall={true}
                        statType="success" />
                    </div>
                    <div className="col-lg pt-2">
                      <Stat
                        statData="$8,950"
                        statText="out-of-network"
                        isSmall={true}
                        statType="danger" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block">
        <hr />
        <div className="row">
          <div className="col-lg">
            <Leaders leadersType="dotted">
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$0"
                leaderLabel="Health Deductible"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$0"
                leaderLabel="Drug Deductible (T1,2,3,4,5)"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$0 copay"
                leaderLabel="Primary Physician"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$40 copay per visit"
                leaderLabel="Specialist"
              />
            </Leaders>
          </div>
          <div className="col-lg">
            <Leaders leadersType="dotted">
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="Douglas"
                leaderLabel="County"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="LOCAL_PPO"
                leaderLabel="Plan Type"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$83.52"
                leaderLabel="Retail Pharmacy"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$0.00"
                leaderLabel="Mail-Order Pharmacy"
              />
            </Leaders>
          </div>
          <div className="col-lg">
            <ul className="list-unstyled">
              <li><Icon iconStyle="fas" iconName="fa-check" isFixedWidth={true} iconColor="text-success" /> Low Income Subsidy</li>
              <li><Icon iconStyle="fas" iconName="fa-times" isFixedWidth={true} iconColor="text-danger" /> Part-B Reduction</li>
              <li><Icon iconStyle="fas" iconName="fa-check" isFixedWidth={true} iconColor="text-success" /> Gap Coverage</li>
              <li><Icon iconStyle="fas" iconName="fa-times" isFixedWidth={true} iconColor="text-danger" /> Insulin Savings Program</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-6">
            <h5>Hospital Inpatient Copay</h5>
            <hr />
            <Leaders leadersType="dotted">
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$350 per day for days 1 through 5"
                leaderLabel="In Network"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$0 per day for days 6 through 90."
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="40% per stay"
                leaderLabel="Out-of-Network"
              />
            </Leaders>
          </div>
          <div className="col-lg-6">
            <h5>Drug Coverage <small>(30 Day Supply, Preferred Retail)</small></h5>
            <hr />
            <Leaders leadersType="dotted">
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$0 copay*"
                leaderLabel="Tier 1 (Preferred Generic)"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$5 copay*"
                leaderLabel="Tier 2 (Generic)"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$47 copay*"
                leaderLabel="Tier 3 (Preferred Brand)"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$100 copay*"
                leaderLabel="Tier 4 (Non-Preferred Drug)"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="33% co-ins*"
                leaderLabel="Tier 5 (Specialty Tier)"
              />
            </Leaders>
            <div className="text-right small text-muted"> * After Deductible</div>
          </div>
        </div>
        <hr />
        <h5>County Enrollment</h5>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Month/Year</th>
              <th>Medicare Eligible</th>
              <th colSpan="2">Med Advantage</th>
              <th colSpan="2">Parent Organization</th>
              <th>Plan Enrollment</th>
              <th>MA Plan Penetration</th>
            </tr>
          </thead>
        </table>
        <hr className="my-2" />
        <div className="form-row">
          <div className="col">
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
            {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Highlights</Button>*/}
            <Button btnStyle="btn-link" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-angle-up" /> Show Plan Highlights</Button>
          </div>
          <div className="col-2 text-right">
            <IconCheck
              checkIcon="fa-eye"
              hasIcon
              checkSize="btn-sm"
            >
              Compare
            </IconCheck>
          </div>
          <div className="col-3 text-right">
            <Button btnStyle="btn-primary" btnSize="btn-sm" isFullWidth btnClass="px-5">Enroll Now</Button>
          </div>
        </div>
      </div>
    </Card>
    <Card cardClass="d-none">
      <div className="row">
        <div className="col-5">
          <span className="font-weight-bold h4">Humana</span> H0028-053-003<br />
          <span className="text-muted">Humana Gold Plus H0028-053 (HMO)</span>
          <Rating
            ratingColor="text-warning"
            ratingEmptyIcon="fa-star"
            ratingEmptyIconStyle="far"
            ratingHalfIcon="fa-star-half-alt"
            ratingHalfIconStyle="fas"
            ratingID="rating-id"
            ratingIcon="fa-star"
            ratingIconStyle="fas"
            ratingLabel="Star Rating "
            ratingMax={5}
            ratingSecondaryColor="text-muted"
            ratingTitle="2.5 out of 5 Dentists Approve!"
            ratingValue={2.5}
          />{' '}
          <Badge badgeType="badge-primary">Health &amp; Drug Coverage</Badge>
        </div>
        <div className="col">
          <div className="d-flex">
            <div className="px-2"></div>
            <Stat
              statData="$12.60"
              statText="monthly premium"
              statType="primary"
              isSmall={true}
            />
            <div className="px-2"></div>
            <Stat
              statData="$0.00"
              statText="Yearly Drug & Premium"
              statType="primary"
              isSmall={true}
            />
            <div className="px-2"></div>
            <div className="flex-fill">
              <div className="d-block border">
                  <div className="row">
                    <div className="col-lg">
                      <Stat
                        statData="$5,900"
                        statText="in-network"
                        isSmall={true}
                        statType="success" />
                    </div>
                    <div className="col-lg">
                      <Stat
                        statData="$8,950"
                        statText="out-of-network"
                        isSmall={true}
                        statType="danger" />
                    </div>
                  </div>
              </div>
              <div className="d-block bg-light text-center">
                <small>HEALTH OUT-OF-POCKET MAX / YEAR</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-0" />
      <Button btnStyle="btn-primary" btnSize="btn-sm" btnClass="px-5 mr-2">Enroll Now</Button>
      <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
      <IconCheck
        checkIcon="fa-eye"
        hasIcon
        checkSize="btn-sm">
        Compare
      </IconCheck>
      <Button btnStyle="btn-link" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Plan Highlights</Button>
    </Card >
    <Card cardClass="d-none">
      <div className="row">
        <div className="col-9">
          <span className="font-weight-bold h4">Humana</span> H0028-053-003{' '}
          <Badge badgeType="badge-primary">Health &amp; Drug Coverage</Badge><br />
          <span className="text-muted">Humana Gold Plus H0028-053 (HMO)</span>
          <hr className="mt-0" />
        </div>
        <div className="col">
          <div className="">
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
            <IconCheck
              checkIcon="fa-eye"
              hasIcon
              checkSize="btn-sm">
              Compare
            </IconCheck>
            <Button btnStyle="btn-primary" btnSize="btn-sm" isFullWidth btnClass="mt-2">Enroll Now</Button>
          </div>
        </div>
      </div>
      <div className="d-flex mt-1">
            <div className="flex-fill">
              <div className="d-block border">
                  <div className="row">
                    <div className="col-lg">
                      <Stat
                        statData="$5,900"
                        statText="in-network"
                        isSmall={true}
                        statType="success" />
                    </div>
                    <div className="col-lg">
                      <Stat
                        statData="$8,950"
                        statText="out-of-network"
                        isSmall={true}
                        statType="danger" />
                    </div>
                  </div>
              </div>
              <div className="d-block bg-light text-center">
                <small>HEALTH OUT-OF-POCKET MAX / YEAR</small>
              </div>
            </div>
            <div className="px-2"></div>
            <Stat
              statData="$12.60"
              statText="monthly premium"
              statType="primary"
              isSmall={true}
            />
            <div className="px-2"></div>
            <Stat
              statData="$0.00"
              statText="Yearly Drug & Premium"
              statType="primary"
              isSmall={true}
            />
            <div className="flex-fill">
              <div className="d-block">
                <div className="row text-center">
                  <div className="col-lg py-3">
                    <Badge badgeType="badge-success">1 of 1 Rx Drugs</Badge>
                  </div>
                  <div className="col-lg py-3 border-left">
                    <Badge badgeType="badge-danger">0 of 1 Pharmacies</Badge>
                  </div>
                  <div className="col-lg py-3 border-left">
                    <Badge badgeType="badge-warning">2 of 3 Providers</Badge>
                  </div>
                </div>
              </div>
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="pl-0 float-right"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Plan Highlights</Button>
              <Rating
                ratingColor="text-warning"
                ratingEmptyIcon="fa-star"
                ratingEmptyIconStyle="far"
                ratingHalfIcon="fa-star-half-alt"
                ratingHalfIconStyle="fas"
                ratingID="rating-id"
                ratingIcon="fa-star"
                ratingIconStyle="fas"
                ratingLabel="Star Rating "
                ratingMax={5}
                ratingSecondaryColor="text-muted"
                ratingTitle="2.5 out of 5 Dentists Approve!"
                ratingValue={2.5}
              />
            </div>
          </div>

    </Card>
    <Card cardClass="d-none">
      <div className="d-md-flex">
        <div className="flex-fill">
          <div className="row no-gutters">
            <div className="col">
              <div>
                <span className="font-weight-bold h4">Humana</span> H0028-053-003{' '}
                <Badge badgeType="badge-primary">Health &amp; Drug Coverage</Badge><br />
                <span className="text-muted">Humana Gold Plus H0028-053 (HMO)</span>
              </div>
            </div>
            <div className="col-3 col-lg-2 text-right">
              <Button btnStyle="btn-link" btnSize="btn-lg">
                <Icon iconStyle="fas" iconName="fa-close" />
              </Button>
            </div>
          </div></div>
        <div className="">
            <Stat
              statData="$12.60"
              statText="monthly premium"
              statType="primary"
                        isSmall={true}
            /></div>
        <div className="px-3"></div>
        <div className="">
            <Stat
              statData="$0.00"
              statText="Yearly Drug & Premium"
              statType="primary"
                        isSmall={true}
            /></div>
        <div className="px-3"></div>
      </div>
      <div className="d-md-flex align-items-end">
        <div className="">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
          <IconCheck
            checkIcon="fa-eye"
            hasIcon
            checkSize="btn-sm">
            Compare
          </IconCheck>
          <Button btnStyle="btn-primary" btnSize="btn-sm" isFullWidth btnClass="mt-2">Enroll Now</Button></div>
        <div className="px-2"></div>
        <div className="flex-fill">
              <div className="d-block">
                <div className="row text-center">
                  <div className="col-lg py-3">
                    <Badge badgeType="badge-success">1 of 1 Rx Drugs</Badge>
                  </div>
                  <div className="col-lg py-3 border-left">
                    <Badge badgeType="badge-danger">0 of 1 Pharmacies</Badge>
                  </div>
                  <div className="col-lg py-3 border-left">
                    <Badge badgeType="badge-warning">2 of 3 Providers</Badge>
                  </div>
                </div>
              </div>
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="pl-0 float-right"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Plan Highlights</Button>
              <Rating
                ratingColor="text-warning"
                ratingEmptyIcon="fa-star"
                ratingEmptyIconStyle="far"
                ratingHalfIcon="fa-star-half-alt"
                ratingHalfIconStyle="fas"
                ratingID="rating-id"
                ratingIcon="fa-star"
                ratingIconStyle="fas"
                ratingLabel="Star Rating "
                ratingMax={5}
                ratingSecondaryColor="text-muted"
                ratingTitle="2.5 out of 5 Dentists Approve!"
                ratingValue={2.5}
              />
        </div>
        <div className="px-2"></div>
        <div className="flex-fill">
              <div className="row">
                <div className="col text-center">
                  <div className="d-block bg-light">
                    <small>HEALTH OUT-OF-POCKET MAX / YEAR</small>
                  </div>
                </div>
              </div>
                <div className="d-block border">
                  <div className="row">
                    <div className="col-lg">
                      <Stat
                        statData="$5,900"
                        statText="in-network"
                        isSmall={true}
                        statType="success" />
                    </div>
                    <div className="col-lg">
                      <Stat
                        statData="$8,950"
                        statText="out-of-network"
                        isSmall={true}
                        statType="danger" />
                    </div>
                  </div>
                </div></div>
      </div>
    </Card>
    <Card cardClass="d-none">
      <div className="d-md-flex">
        <div className="flex-fill order-md-last" >
          <div className="row ">
            <div className="col">
              <div>
                <span className="font-weight-bold h4">Humana</span> H0028-053-003{' '}
                <Badge badgeType="badge-primary">Health &amp; Drug Coverage</Badge><br />
                <span className="text-muted">Humana Gold Plus H0028-053 (HMO)</span>
              </div>
            </div>
            <div className="col text-right">

          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
          <IconCheck
            checkIcon="fa-eye"
            hasIcon
            checkSize="btn-sm">
            Compare
          </IconCheck>
          <Button btnStyle="btn-primary" btnSize="btn-sm" btnClass="ml-2 px-3">Enroll Now</Button>

              <Button btnStyle="btn-link" btnSize="btn-lg">
                <Icon iconStyle="fas" iconName="fa-close" />
              </Button>
            </div>
          </div>
          <hr className="mt-0" />
          <div className="row">
            <div className="col order-md-last">
              <div className="d-block border">
                <div className="row text-center">
                  <div className="col-lg py-3">
                    <Badge badgeType="badge-success">1 of 1 Rx Drugs</Badge>
                  </div>
                  <div className="col-lg py-3 border-left">
                    <Badge badgeType="badge-danger">0 of 1 Pharmacies</Badge>
                  </div>
                  <div className="col-lg py-3 border-left">
                    <Badge badgeType="badge-warning">2 of 3 Providers</Badge>
                  </div>
                </div>
              </div>
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="pl-0 float-right"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Plan Highlights</Button>
              <Rating
                ratingColor="text-warning"
                ratingEmptyIcon="fa-star"
                ratingEmptyIconStyle="far"
                ratingHalfIcon="fa-star-half-alt"
                ratingHalfIconStyle="fas"
                ratingID="rating-id"
                ratingIcon="fa-star"
                ratingIconStyle="fas"
                ratingLabel="Star Rating "
                ratingMax={5}
                ratingSecondaryColor="text-muted"
                ratingTitle="2.5 out of 5 Dentists Approve!"
                ratingValue={2.5}
              />
            </div>
            <div className="col-md-6 col-lg-5">
              <br className="d-md-none" />
              <div className="row">
                <div className="col text-center">
                  <div className="d-block bg-light">
                    <small>HEALTH OUT-OF-POCKET MAX / YEAR</small>
                  </div>
                </div>
              </div>
                <div className="d-block border">
                  <div className="row">
                    <div className="col-lg">
                      <Stat
                        statData="$5,900"
                        statText="in-network"
                        isSmall={true}
                        statType="success" />
                    </div>
                    <div className="col-lg">
                      <Stat
                        statData="$8,950"
                        statText="out-of-network"
                        isSmall={true}
                        statType="danger" />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="px-3"></div>
        <div className="order-md-first text-center">
          <br className="d-lg-none" />
          <div className="mb-2">
            <Stat
              statData="$12.60"
              statText="monthly premium"
              statType="primary"
            />
            <hr className="my-0"/>
            <Stat
              statData="0.00"
              statText="Yearly Drug & Premium"
              statType="primary"
            />
          </div>
        </div>
      </div>
    </Card>
    <Card cardClass="d-none">
      <div className="d-md-flex">
        <div className="flex-fill order-md-last" >
          <div className="row no-gutters">
            <div className="col">
              <div>
                <span className="font-weight-bold h4">Humana</span> H0028-053-003<br />
                <span className="text-muted">HumanaChoice H5216-340 (PPO)</span>{' '}
              <Badge badgeType="badge-primary">Health &amp; Drug Coverage</Badge>
              </div>
            </div>
            <div className="col-3 col-lg-2 text-right">
              <Button btnStyle="btn-link" btnSize="btn-lg">
                <Icon iconStyle="fas" iconName="fa-close" />
              </Button>
            </div>
          </div>
          <hr className="mt-0" />
          <div className="row">
            <div className="col order-md-last">
              <Button btnSize="btn-sm" btnStyle="btn-secondary"><Icon iconStyle="fas" iconName="fa-plus" /> Prescriptions</Button>{' '}
              <Button btnSize="btn-sm" btnStyle="btn-secondary"><Icon iconStyle="fas" iconName="fa-plus" /> Pharmacies</Button>{' '}
              <Rating
                ratingColor="text-warning"
                ratingEmptyIcon="fa-star"
                ratingEmptyIconStyle="far"
                ratingHalfIcon="fa-star-half-alt"
                ratingHalfIconStyle="fas"
                ratingID="rating-id"
                ratingIcon="fa-star"
                ratingIconStyle="fas"
                ratingLabel="Star Rating "
                ratingMax={5}
                ratingSecondaryColor="text-muted"
                ratingTitle="2.5 out of 5 Dentists Approve!"
                ratingValue={4}
              />
            </div>
            <div className="col-md-6 col-lg-5">
              <br className="d-md-none" />
              <div className="row">
                <div className="col text-center">
                  <div className="d-block bg-light">
                    <small>HEALTH OUT-OF-POCKET MAX / YEAR</small>
                  </div>
                </div>
              </div>
                <div className="d-block border">
                  <div className="row">
                    <div className="col-lg">
                      <Stat
                        statData="$7,900"
                        statText="in-network"
                        isSmall={true}
                        statType="success" />
                    </div>
                    <div className="col-lg">
                      <Stat
                        statData="$11,900"
                        statText="out-of-network"
                        isSmall={true}
                        statType="danger" />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="px-3"></div>
        <div className="order-md-first text-center">
          <br className="d-lg-none" />
          <div className="mb-2"><Stat
            statData="$0.00"
            statText="monthly premium"
            statType="primary"
            isSmall={true}
          /></div>
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
          <IconCheck
            checkIcon="fa-eye"
            hasIcon
            checkSize="btn-sm">
            Compare
          </IconCheck>
          <Button btnStyle="btn-primary" btnSize="btn-sm" isFullWidth btnClass="mt-2">Enroll Now</Button>
          <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="pl-0"><Icon iconStyle="fas" iconName="fa-angle-down" /> Hide Plan Highlights</Button>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg">
          <Leaders leadersType="dotted">
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$0"
              leaderLabel="Health Deductible"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$0"
              leaderLabel="Drug Deductible (T1,2,3,4,5)"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$0 copay"
              leaderLabel="Primary Physician"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$40 copay per visit"
              leaderLabel="Specialist"
            />
          </Leaders>
        </div>
        <div className="col-lg">
          <Leaders leadersType="dotted">
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="Douglas"
              leaderLabel="County"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="LOCAL_PPO"
              leaderLabel="Plan Type"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$83.52"
              leaderLabel="Retail Pharmacy"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$0.00"
              leaderLabel="Mail-Order Pharmacy"
            />
          </Leaders>
        </div>
        <div className="col-lg">
          <ul className="list-unstyled">
            <li><Icon iconStyle="fas" iconName="fa-check" isFixedWidth={true} iconColor="text-success" /> Low Income Subsidy</li>
            <li><Icon iconStyle="fas" iconName="fa-times" isFixedWidth={true} iconColor="text-danger" /> Part-B Reduction</li>
            <li><Icon iconStyle="fas" iconName="fa-check" isFixedWidth={true} iconColor="text-success" /> Gap Coverage</li>
            <li><Icon iconStyle="fas" iconName="fa-times" isFixedWidth={true} iconColor="text-danger" /> Insulin Savings Program</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-6">
          <h5>Hospital Inpatient Copay</h5>
          <hr />
          <Leaders leadersType="dotted">
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$350 per day for days 1 through 5"
              leaderLabel="In Network"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$0 per day for days 6 through 90."
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="40% per stay"
              leaderLabel="Out-of-Network"
            />
          </Leaders>
        </div>
        <div className="col-lg-6">
          <h5>Drug Coverage <small>(30 Day Supply, Preferred Retail)</small></h5>
          <hr />
          <Leaders leadersType="dotted">
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$0 copay*"
              leaderLabel="Tier 1 (Preferred Generic)"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$5 copay*"
              leaderLabel="Tier 2 (Generic)"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$47 copay*"
              leaderLabel="Tier 3 (Preferred Brand)"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$100 copay*"
              leaderLabel="Tier 4 (Non-Preferred Drug)"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="33% co-ins*"
              leaderLabel="Tier 5 (Specialty Tier)"
            />
          </Leaders>
          <div className="text-right small text-muted"> * After Deductible</div>
        </div>
      </div>
      <hr />
      <h5>County Enrollment</h5>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Month/Year</th>
            <th>Medicare Eligible</th>
            <th colSpan="2">Med Advantage</th>
            <th colSpan="2">Parent Organization</th>
            <th>Plan Enrollment</th>
            <th>MA Plan Penetration</th>
          </tr>
        </thead>
      </table>
    </Card>
  </div>
);
SearchResults.args = {
};

export const BasicRibbon = (args) => (
  <div className="container">
    <div className="row">
      <div className="col-6 mx-auto">
        <h5>Card with a Ribbon</h5>
        <Card>
          <Ribbon>Wow!</Ribbon>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus velit ut sapien tincidunt euismod. Sed vulputate quam at hendrerit placerat. In congue sodales volutpat. Vivamus malesuada sem venenatis metus suscipit scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur et finibus mi. Quisque pellentesque blandit nulla, ac rhoncus urna blandit quis.</p>
            <p>Integer nec tellus ac dui commodo tempor. Cras bibendum quam eu mauris vehicula pellentesque. Vivamus erat augue, dictum vitae nisl eget, dignissim aliquam nulla. Nam quis luctus tellus, in sollicitudin leo. Vivamus maximus rutrum lectus sed posuere. Proin egestas ligula eget dolor convallis molestie. Etiam ut nisl odio. Aliquam quis dapibus felis, quis porttitor arcu. Maecenas ut ante et dui ullamcorper ultricies quis a nisl. Donec sed tincidunt nisi, non ornare tellus. Integer risus lorem, commodo et imperdiet at, imperdiet et ex. Aliquam erat volutpat. Maecenas tempus ipsum eu metus accumsan, vitae tincidunt lectus tincidunt.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel pharetra libero, in dapibus nisi. Pellentesque non suscipit enim. Ut velit urna, pretium vel elit vel, suscipit tempor libero. Maecenas eu pulvinar lorem. Pellentesque in congue ligula. Proin eget ultrices eros, a mattis orci. Vestibulum diam eros, pulvinar et semper in, venenatis sed eros. Aliquam commodo ac massa sed sollicitudin. Proin pulvinar commodo libero, lacinia scelerisque lacus dapibus quis. Nullam at ex mollis, porttitor magna pretium, tristique massa. Quisque quis neque ultricies, imperdiet ligula sed, aliquam nisi. Nulla auctor nibh quis orci consequat tincidunt. Nulla volutpat sollicitudin egestas. Nulla dictum lacus a consequat dapibus. Mauris posuere accumsan turpis, et viverra orci. </p>
        </Card>
      </div>
    </div>
  </div>
);

export const Dashboard = (args) => (
  <div>
    <h2>Welcome Back</h2>
    <hr />
    <div className="row">
      <div className="col-8">
            <Card cardClass="bg-dark text-light">
              <div className="mb-2">
                <Icon iconStyle="fas" iconName="fa-file-contract" isFixedWidth iconSize="fa-lg" />
              </div>
              <h5>E-Applications</h5>
            </Card>
        <div className="form-row">
          <div className="col-4">
            <Card>
              <div className="mb-2">
                <Icon iconStyle="fas" iconName="fa-cart-plus" isFixedWidth iconColor="text-muted" iconSize="fa-lg" />
              </div>
              <h5>Medicare Supplement</h5>
            </Card>
            <Card>
              <div className="mb-2">
                <Icon iconStyle="fas" iconName="fa-arrow-turn-up" isFixedWidth iconColor="text-muted" iconSize="fa-lg" />
              </div>
              <h5>Medicare Advantage/PDP</h5>
            </Card>
          </div>
          <div className="col-4">
            <Card>
              <div className="mb-2">
                <Icon iconStyle="fas" iconName="fa-heart-pulse" isFixedWidth iconColor="text-muted" iconSize="fa-lg" />
              </div>
              <h5>Final Expense Life</h5>
            </Card>
            <Card>
              <div className="mb-2">
                <Icon iconStyle="fas" iconName="fa-hospital" isFixedWidth iconColor="text-muted" iconSize="fa-lg" />
              </div>
              <h5>Hospital Indemnity</h5>
            </Card>
            <Card>
              <div className="mb-2">
                <Icon iconStyle="fas" iconName="fa-tooth" isFixedWidth iconColor="text-muted" iconSize="fa-lg" />
              </div>
              <h5>Dental &amp; Vision</h5>
            </Card>
          </div>
          <div className="col-4">
            <Card>
              <div className="mb-2">
                <Icon iconStyle="fas" iconName="fa-chart-line" isFixedWidth iconColor="text-success" iconSize="fa-lg" />
              </div>
              <h5>Market Pulse</h5>
            </Card>
            <Card>
              <div className="mb-2">
                <Icon iconStyle="fas" iconName="fa-chart-column" isFixedWidth iconColor="text-info" iconSize="fa-lg" />
              </div>
              <h5>Market Edge</h5>
            </Card>
            <Card>
              <div className="mb-2">
                <Icon iconStyle="fas" iconName="fa-chart-area" isFixedWidth iconColor="text-danger" iconSize="fa-lg" />
              </div>
              <h5>Market Reach</h5>
            </Card>
          </div>
        </div>
        <div className="list-group mb-2">
          <a href="" className="list-group-item bg-primary text-white">
            <span class="pr-4">
              <Avatar
                avatarShape="rounded-circle"
                avatarBgColor="bg-white"
                avatarTxtColor="text-primary"
              >
                <Icon iconStyle="fas" iconName="fa-file-contract" isFixedWidth />
              </Avatar>
            </span>
            E-Applications
          </a>
        </div>
        <div className="form-row">
          <div className="col">
            <div className="list-group text-center">
              <a href="" className="list-group-item">Medicare Supplement</a>
              <a href="" className="list-group-item">Medicare Advantage/PDP</a>
              <a href="" className="list-group-item">
              <Avatar
                avatarShape="rounded-circle"
                avatarBgColor="bg-primary"
                avatarTxtColor="text-white"
              >
                <Icon iconStyle="fas" iconName="fa-heart-pulse" isFixedWidth />
              </Avatar><br />
                  Final Expense Life</a>
              <a href="" className="list-group-item">
              <Avatar
                avatarShape="rounded-circle"
                avatarBgColor="bg-primary"
                avatarTxtColor="text-white"
              >
                <Icon iconStyle="fas" iconName="fa-hospital" isFixedWidth />
              </Avatar><br />
                Hospital Indemnity</a>
              <a href="" className="list-group-item">
              <Avatar
                avatarShape="rounded-circle"
                avatarBgColor="bg-primary"
                avatarTxtColor="text-white"
              >
                <Icon iconStyle="fas" iconName="fa-tooth" isFixedWidth />
              </Avatar><br />
                Dental &amp; Vision</a>
            </div>
          </div>
          <div className="col">
            <div className="list-group">
              <a href="" className="list-group-item">Market Pulse<br />
              <small>Lorem ipsum</small></a>
              <a href="" className="list-group-item">Market Edge<br />
              <small>The ultimate sales and marketing research tool. </small></a>
              <a href="" className="list-group-item">Market Reach<br />
              <small>The most robust database of agents.</small></a>
            </div>
          </div>
          <div className="col">
            <div className="list-group mb-2">
              <a href="" className="list-group-item">Locker Files</a>
              <a href="" className="list-group-item">eSOA Signing List</a>
            </div>
            <div className="list-group">
              <a href="" className="list-group-item">Client Manager</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <h5>Quote History</h5>
        <Card></Card>
      </div>
    </div>
  </div>
);

export const Limitations = (args) => (
  <div>
    <div className="row">
      <div className="col-8 mx-auto">
        <h5>Limitations</h5>
        <Card>
          <Formgroup
            formElement="multiselect"
            inputID="multiselectID"
            hideLabel
            isMulti
            onClick={function noRefCheck(){}}
            selectOptions={[
              {
                label: 'First Option',
                value: 'a'
              },
              {
                label: 'Second Option',
                value: 'b'
              },
              {
                label: 'Third Option',
                value: 'b'
              }
            ]}
          />
          <div className="form-group row align-items-end">
            <div className="col">
              <div className="">
                <label>Amount <small>(min-max)</small></label>
                <div className="input-group">
                  <Textfield />
                  <div className="input-group-prepend input-group-append">
                    <span className="input-group-text"> - </span>
                  </div>
                  <Textfield />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="">
                <label>Age <small>(min-max)</small></label>
                <div className="input-group">
                  <Textfield />
                  <div className="input-group-prepend input-group-append">
                    <span className="input-group-text"> - </span>
                  </div>
                  <Textfield />
                </div>
              </div>
            </div>
            <div className="col-2">
              <Button
                btnStyle="btn-secondary"
                isFullWidth
              >
                <Icon iconStyle="fas" iconName="fa-plus" /> Add
              </Button>
            </div>
          </div>
          <List>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  $0 - $100,000
                </div>
                <div className="col">
                  65 - 70 years old
                </div>
                <div className="col text-right">
                  <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Delete Rule" btnClass="text-muted"><Icon iconStyle="fas" iconName="fa-trash" isFixedWidth /></Button>
                </div>
              </div>
            </div>
          </List>
        </Card>
        <div className="text-right">
          <Button
            btnStyle="btn-primary"
          >
            Save Carrier Product
          </Button>
        </div>
      </div>
    </div>
  </div>
);

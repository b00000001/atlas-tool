import Image from 'next/image';
import DataFetch from './DataFetch';

function Panel({coin}) {
  return (
    <div className="overflow-x-auto w-full h-full">
      <DataFetch coin={coin} />
      <table className="table w-full h-full">
        <thead>
          <tr>
            <th>Collection</th>
            <th>Floor</th>
            <th>Sales</th>
            <th>Average</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <Image
                      src="/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Stargaze Punks</div>
                  <div className="text-sm opacity-50">
                    Circulating supply: 8,888
                  </div>
                </div>
              </div>
            </td>
            <td>
              3,600
              <br />
              <span className="badge badge-ghost badge-sm text-green-400">
                +0.81%
              </span>
            </td>
            <td>
              1,328
              <br />
              <span className="badge badge-ghost badge-sm text-green-400">
                +243.15%
              </span>
            </td>
            <td>
              0.021
              <br />
              <span className="badge badge-ghost badge-sm text-green-400">
                +27.73%
              </span>
            </td>
            <td>
              27.51
              <br />
              <span className="badge badge-ghost badge-sm text-green-400">
                +338.31%
              </span>
            </td>
          </tr>

          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <Image
                      src="/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Bad Kids</div>
                  <div className="text-sm opacity-50">
                    Circulating supply: 1,600
                  </div>
                </div>
              </div>
            </td>
            <td>
              1,730
              <br />
              <span className="badge badge-ghost badge-sm text-green-400">
                +0.81%
              </span>
            </td>
            <td>
              1,328
              <br />
              <span className="badge badge-ghost badge-sm text-green-400">
                +243.15%
              </span>
            </td>
            <td>
              0.021
              <br />
              <span className="badge badge-ghost badge-sm text-green-400">
                +27.73%
              </span>
            </td>
            <td>
              27.51
              <br />
              <span className="badge badge-ghost badge-sm text-green-400">
                +338.31%
              </span>
            </td>
          </tr>

          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <Image
                      src="/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Stargaze Citizens</div>
                  <div className="text-sm opacity-50">
                    Circulating supply: 8,888
                  </div>
                </div>
              </div>
            </td>
            <td>
              3,600
              <br />
              <span className="badge badge-ghost badge-sm text-green-400">
                +0.81%
              </span>
            </td>
            <td>
              1,328
              <br />
              <span className="badge badge-ghost badge-sm text-green-400">
                +243.15%
              </span>
            </td>
            <td>
              0.021
              <br />
              <span className="badge badge-ghost badge-sm text-green-400">
                +27.73%
              </span>
            </td>
            <td>
              27.51
              <br />
              <span className="badge badge-ghost badge-sm text-green-400">
                +338.31%
              </span>
            </td>
          </tr>

          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <Image
                      src="/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">The Space Ape Society</div>
                  <div className="text-sm opacity-50">
                    Circulating supply: 8,888
                  </div>
                </div>
              </div>
            </td>
            <td>
              3,600
              <br />
              <span className="badge badge-ghost badge-sm text-green-400">
                +0.81%
              </span>
            </td>
            <td>
              1,328
              <br />
              <span className="badge badge-ghost badge-sm text-green-400">
                +243.15%
              </span>
            </td>
            <td>
              0.021
              <br />
              <span className="badge badge-ghost badge-sm text-green-400">
                +27.73%
              </span>
            </td>
            <td>
              27.51
              <br />
              <span className="badge badge-ghost badge-sm text-green-400">
                +338.31%
              </span>
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <th>Collection</th>
            <th>Floor</th>
            <th>Sales</th>
            <th>Average</th>
            <th>Volume</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Panel;

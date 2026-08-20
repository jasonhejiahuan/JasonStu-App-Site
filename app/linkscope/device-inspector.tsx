const rawParameters = [
  ["connection.connected", "true", "Available", "public.corehid"],
  ["radio.rssi", "−52 dBm", "Available", "public.iobluetooth"],
  ["battery.level", "—", "Not exposed by macOS", "public.iobluetooth"],
  ["hid.reportInterval", "8000", "Available", "public.corehid"],
];

const history = [
  ["radio.rssi", "public.iobluetooth", "−52 dBm", "now"],
  ["connection.connected", "public.corehid", "true", "−5 s"],
  ["battery.level", "public.iobluetooth", "Not exposed by macOS", "−10 s"],
  ["radio.rssi", "public.iobluetooth", "Device did not report", "−15 s"],
];

export function DeviceInspector() {
  return (
    <figure className="device-inspector" aria-labelledby="device-demo-title" aria-describedby="device-inspector-caption">
      <header className="inspector-demo-intro">
        <div>
          <p>Interactive reconstruction</p>
          <h3 id="device-demo-title">Explore a LinkScope device record</h3>
        </div>
        <p>Use the detail tabs to move from a consolidated accessory to its sources, raw values, and history.</p>
      </header>

      <div className="linkscope-app-window" role="group" aria-label="LinkScope application demonstration">
        <div className="app-titlebar" aria-hidden="true">
          <span>LinkScope</span>
        </div>

        <div className="app-toolbar">
          <div className="app-toolbar-identity">
            <img src="/linkscope-mark.svg" alt="" width="465" height="432" />
            <strong>LinkScope</strong>
          </div>
          <div className="app-toolbar-context" aria-label="Current provider status">
            <span><i aria-hidden="true" />7 providers</span>
            <span>1 connected</span>
          </div>
        </div>

        <div className="device-inspector-layout">
          <aside className="device-browser" aria-label="Device browser">
            <p className="device-browser-title">Devices</p>

            <section className="device-browser-group">
              <h4>Connected <span>(1)</span></h4>
              <div className="selected-device" aria-current="true">
                <span className="device-status-dot" aria-hidden="true" />
                <span>
                  <strong>Magic Trackpad</strong>
                  <small>Connected · Bluetooth</small>
                </span>
              </div>
            </section>

            <section className="device-browser-group device-browser-secondary">
              <h4>Saved · Not connected</h4>
              <p>Previously observed accessories</p>
            </section>

            <section className="device-browser-group device-browser-secondary">
              <h4>Inactive / Historical</h4>
              <p>Built-in, wired, and past identities</p>
            </section>

            <div className="device-browser-destinations" aria-hidden="true">
              <span>Provider Status</span>
              <span>Timeline</span>
              <span>Diagnostics</span>
            </div>
          </aside>

          <fieldset className="device-workspace">
            <legend className="visually-hidden">Inspect the selected device</legend>
            <header className="device-workspace-header">
              <div className="selected-device-record">
                <img src="/linkscope-mark.svg" alt="" width="465" height="432" />
                <div>
                  <p>Selected device</p>
                  <h4>Magic Trackpad</h4>
                  <p>3 transport identities · 5 latest parameters</p>
                </div>
              </div>
              <p className="connected-state">
                <span aria-hidden="true" /> Connected · Bluetooth
              </p>
            </header>

            <div className="inspector-tabs" aria-label="Device detail views">
              <span>
                <input type="radio" name="device-detail-tab" id="device-tab-summary" defaultChecked />
                <label htmlFor="device-tab-summary">Summary</label>
              </span>
              <span>
                <input type="radio" name="device-detail-tab" id="device-tab-raw" />
                <label htmlFor="device-tab-raw">Raw Parameters</label>
              </span>
              <span>
                <input type="radio" name="device-detail-tab" id="device-tab-history" />
                <label htmlFor="device-tab-history">History</label>
              </span>
            </div>

            <div className="device-panels">
              <section className="device-panel device-panel-summary" aria-labelledby="summary-heading">
                <div className="panel-heading">
                  <p>Summary</p>
                  <h4 id="summary-heading">Transport identities</h4>
                  <span>Independent observations stay attached to the device that brought them together.</span>
                </div>
                <ol className="transport-list">
                  <li>
                    <span>01</span>
                    <div><small>Transport</small><strong>coreHID</strong></div>
                    <div><small>Provider</small><code>public.corehid</code></div>
                    <div><small>Protocol</small><strong>Bluetooth</strong></div>
                  </li>
                  <li>
                    <span>02</span>
                    <div><small>Transport</small><strong>IOBluetooth</strong></div>
                    <div><small>Provider</small><code>public.iobluetooth</code></div>
                    <div><small>Protocol</small><strong>Bluetooth</strong></div>
                  </li>
                  <li>
                    <span>03</span>
                    <div><small>Transport</small><strong>coreHID</strong></div>
                    <div><small>Provider</small><code>public.corehid</code></div>
                    <div><small>Protocol</small><strong>Bluetooth</strong></div>
                  </li>
                </ol>
                <div className="latest-observations">
                  <p><code>connection.connected</code><strong>true</strong><span>public.corehid</span></p>
                  <p><code>radio.rssi</code><strong>−52 dBm</strong><span>public.iobluetooth</span></p>
                  <p><code>battery.level</code><strong>Not exposed by macOS</strong><span>public.iobluetooth</span></p>
                </div>
              </section>

              <section className="device-panel device-panel-raw" aria-labelledby="raw-heading">
                <div className="panel-heading">
                  <p>Raw Parameters</p>
                  <h4 id="raw-heading">Provider observations</h4>
                  <span>Each value keeps its source and availability.</span>
                </div>
                <div className="parameter-table-wrap">
                  <table className="parameter-table">
                    <thead>
                      <tr><th>Parameter</th><th>Raw value</th><th>Availability</th><th>Provider</th></tr>
                    </thead>
                    <tbody>
                      {rawParameters.map(([parameter, value, availability, provider]) => (
                        <tr key={`${parameter}-${provider}`}>
                          <th scope="row"><code>{parameter}</code></th>
                          <td>{value}</td>
                          <td><span className={availability === "Available" ? "available" : undefined}>{availability}</span></td>
                          <td><code>{provider}</code></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="device-panel device-panel-history" aria-labelledby="history-heading">
                <div className="panel-heading">
                  <p>History</p>
                  <h4 id="history-heading">Observation history</h4>
                  <span>Evidence changes without losing provenance.</span>
                </div>
                <ol className="history-list">
                  {history.map(([parameter, provider, value, time]) => (
                    <li key={`${parameter}-${time}`}>
                      <div><code>{parameter}</code><small>{provider}</small></div>
                      <strong>{value}</strong>
                      <time>{time}</time>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </fieldset>
        </div>
      </div>

      <figcaption id="device-inspector-caption">
        Web-native explanatory reconstruction with representative, privacy-safe values.
        Its device-led hierarchy, labels, and availability states reflect the current app.
      </figcaption>
    </figure>
  );
}

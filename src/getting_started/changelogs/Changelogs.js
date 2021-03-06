import React from 'react';
import { Link } from 'react-router';

import { API_VERSION } from '~/constants';

export default function Authentication() {
  return (
    <section className="Article">
      <h1>Changelogs</h1>
      <section>
        <p>As releases are made Changelogs will be published here.</p>
      </section>
      <section>
        <h2>2018-04-02</h2>
        <hr /><br />
        <b>Breaking:</b><br />
        <ul>
          <li> Unify IPv4, IPv6 GET/POST; use "type": "public"</li>
          <li> Moved /managed/linode_settings to /managed/linode-settings
            <ul>
              <li> /managed/linode_settings/:id moved to /managed/linode-settings/:id</li>
              <li> This was to keep our convention of using dashes in URLs
              instead of underscores</li>
            </ul>
          </li>
          <li> Password no longer accepted in POST /account/users
            <ul>
              <li> You may no longer provide a password when creating a new user</li>
              <li> New users will immediately receive a password reset email to
              set their password</li>
            </ul>
          </li>
          <li>Changed returned Region IDs
            <ul>
              <li>Slugs such as "us-east-1a" are now returned as "us-east"</li>
              <li>These values had previosuly been accepted as input.</li>
              <li>"us-south" was renamed "us-central"</li>
              <li>Old values are still accepted (and translated) in requests</li>
            </ul>
          </li>
          <li> Removed "addresses" from GET /linode/instances/:id/ips response
            <ul>
              <li> These addresses are now returned in GET /networking/ips</li>
            </ul>
          </li>
          <li> Moved GET/PUT for range/pool v6 addresses to /networking/ips
            <ul>
              <li> GET /networking/ipv6/:address moved to GET /networking/ips/:address</li>
              <li> PUT /networking/ipv6/:address moved to GET /networking/ips/:address</li>
            </ul>
          </li>
          <li> /linode/instances/$id/rebuild returns a Linode</li>
          <li> Fixed inconsistent responses for action endpoints
            <ul>
              <li> POST /linode/instances/:id/backups-enable now returns {} on success</li>
              <li> POST /linode/instances/:id/backups-disable now returns {} on success</li>
            </ul>
          </li>
          <li> Creating a payment now returns the new payment
            <ul>
              <li> POST /account/payments now returns a Payment object</li>
              <li> POST /account/payments/paypal/execute now returns a Payment object</li>
            </ul>
          </li>
          <li> Removed the ability to change another user's email address
            <ul>
              <li> PUT /account/users/:username no longer accepts "email"</li>
              <li> PUT /profile can still be used to change your own email address</li>
            </ul>
          </li>
          <li> Moved ipv4-specific networking endpoints
            <ul>
              <li> POST /networking/ip-assign moved to POST /networking/ipv4/assign</li>
              <li> POST /networking/ip-sharing moved to POST /networking/ipv4/share</li>
              <li> POST /networking/ipv4/assign now returns {} on success</li>
            </ul>
          </li>
        </ul>
        <b>Features:</b><br />
        <ul>
          <li> Added fields to Notification object
            <ul>
              <li> Added "label" - a brief description of the notification</li>
              <li> Added "severity" - one of "minor", "major", or "critical"</li>
              <li> Added "until" - a datetime or null</li>
              <li> Added "notice" to possible values for "type"</li>
            </ul>
          </li>
          <li> Added POST /linode/instances/:id/disks/:id/clone
            <ul>
              <li> This used to be at POST /linode/instances/:id/disks/:id</li>
            </ul>
          </li>
          <li> GET /linode/instances is now filterable on "id"</li>
          <li> GET /account/events is now filterable on "id"</li>
        </ul>
        <h2>2018-03-14</h2>
        <hr /><br />
        <b>Breaking:</b><br />
        <ul>
          <li>Removed the ability to change passwords
            <ul>
              <li>Removed POST /profile/password</li>
              <li>Removed POST /account/users/:username/password</li>
              <li>To reset your password, use manager.linode.com</li>
            </ul>
          </li>
        </ul>
        <b>Features:</b><br />
        <ul>
          <li>Added support for refresh tokens
            <ul>
              <li>Apps with an active refresh token are returned in GET /profile/apps</li>
              <li>Revoking an app's access to your account expires any refresh tokens it has</li>
            </ul>
          </li>
        </ul>
        <b>Bugfixes:</b><br />
        <ul>
          <li>Fix output for ipv6 RDNS endpoints
            <ul>
              <li>PUT /networking/ips/:address now returns the modified v6 address</li>
              <li>PUT /linode/instances/:id/ips/:address now returns the modified v6 address</li>
              <li>Nothing has changed for these endpoints when :address is a v4 address</li>
            </ul>
          </li>
          <li>Fixed bug setting RDNS for v6 addresses</li>
          <li>Fixed bug making it impossible to provide authorized_keys when rebuilding
          a Linode</li>
        </ul>
        <h2>2018-02-26</h2>
        <hr /><br />
        <b>Breaking:</b><br />
        <ul>
          <li>Unified IPv4 and IPv6 Objects
            <ul>
              <li>Removed "range" from IPv6 object</li>
              <li>Added "linode_id" to IPv6 object</li>
              <li>Added "region" to IPv6 object</li>
            </ul>
          </li>
          <li>Removed GET /networking/ipv4</li>
          <li>Separated /networking/ipv6 into /pools and /ranges
            <ul>
              <li>Added GET /networking/ipv6/pools</li>
              <li>Added GET /networking/ipv6/ranges</li>
              <li>Removed GET /networking/ipv6</li>
            </ul>
          </li>
          <li>Changed GET /linode/instances/:id/ips response
            <ul>
              <li>ipv6.link_local is now a full IPAddress object</li>
            </ul>
          </li>
          <li>Improved response for unrestricted user's grants
            <ul>
              <li>Changed GET /profile/grants and GET /account/users/:username/grants</li>
              <li>Now returns a 204 with no content when getting grants for unrestricted users</li>
            </ul>
          </li>
          <li>Moved /linode/instances/:id/ips/sharing to /networking/ip-sharing
            <ul>
              <li>linode_id must now be passed in, along with existing ips list</li>
            </ul>
          </li>
          <li>Removed deprecated "distribution" fields and endpoints
            <ul>
              <li>Removed GET /linode/distributions</li>
              <li>Removed GET /linode/distributions/:id</li>
              <li>These fields or endpoints had been deprecated since 2017-12-11</li>
            </ul>
          </li>
          <li>Changed POST /managed/contacts
            <ul>
              <li>"phone" is an object containing primary and secondary numbers</li>
              <li>phone_primary -> phone.primary</li>
              <li>phone_secondary -> phone.secondary</li>
            </ul>
          </li>
          <li>Changed account/notifications
            <ul>
              <li>Removed xsa notification type</li>
              <li>Renamed balance_outstanding to payment_due</li>
            </ul>
          </li>
          <li>Changed error response
            <ul>
              <li>"field" changed to represent nesting with x.x</li>
            </ul>
          </li>
          <li>Changed GET/PUT /account
            <ul>
              <li>Renamed "vat_number" to "tax_id"</li>
            </ul>
          </li>
          <li>Removed managed_issue from POST /support/tickets</li>
        </ul>
        <b>Features:</b><br />
        <ul>
          <li>Added GET /networking/ips
            <ul>
              <li>Returns all ipv4 and ipv6 addresses on your account</li>
            </ul>
          </li>
          <li>Added support for short region slugs
            <ul>
              <li>Omitting the suffix of a region slug picks a default</li>
              <li>For example, "us-east" is treated as "us-east-1a"</li>
            </ul>
          </li>
          <li>Support tickets ordered by status, update date</li>
        </ul>
        <b>Bugfixes:</b><br />
        <ul>
          <li>Cloned linodes now copy original Linode's image</li>
          <li>Fixed bug parsing OAuth Scopes when creating token</li>
        </ul>
      </section>
      <section>
        <h2>2018-01-24</h2>
        <hr /><br />
        <b>Breaking:</b><br />
        <ul>
          <li>Removed "token" Authorization scheme
            <ul>
              <li>The same value is accepted as "Bearer"</li>
              <li>No longer accepted: "Authorization: token $TOKEN"</li>
              <li>Please send as: "Authorization: Bearer $TOKEN"</li>
            </ul>
          </li>
          <li>Changed POST support/tickets
            <ul>
              <li>Now accepts "managed_issue" (boolean) instead of "managed_issue_type"</li>
            </ul>
          </li>
          <li>Reworked backups response
            <ul>
              <li>Removed "daily" and "weekly"</li>
              <li>Added "automatic"</li>
              <li>Removed "availability" from Backup object</li>
              <li>Removed "service" object</li>
            </ul>
          </li>
          <li>Removed /linode/instance/:id/disk/:id/imagize
            <ul>
              <li>Functionality moved to POST /images</li>
            </ul>
          </li>
          <li>Reworked /account/settings into two endpoints
            <ul>
              <li>Changed /account/settings endpoint to /account</li>
              <li>network_helper and longview_subscription remain in /account/settings</li>
            </ul>
          </li>
          <li>Removed 'max' from /account/transfer</li>
          <li>Removed /nodebalancers/$id/configs/$id/ssl</li>
          <li>Removed zonefile object from Domain</li>
          <li>Changed Notification types
            <ul>
              <li>scheduled_migration -> migration_scheduled</li>
              <li>pending_migration -> migration_pending</li>
              <li>scheduled_reboot -> reboot_scheduled</li>
              <li>outstanding_balance -> balance_outstanding</li>
              <li>important_ticket -> ticket_important</li>
              <li>abuse_ticket -> ticket_abuse</li>
            </ul>
          </li>
        </ul>
        <b>Features:</b><br />
        <ul>
          <li>Added POST /images to create an image from a disk</li>
          <li>Added "message" to Notification object
            <ul>
              <li>Described the notification in a human-readable manner</li>
            </ul>
          </li>
          <li>Added ability to enroll in Managed
            <ul>
              <li>POST /account/settings/managed-enable</li>
            </ul>
          </li>
          <li>Added "uid" to Profile response</li>
          <li>Added ssl to PUT /nodebalancers/$id/configs/$id</li>
        </ul>
        <b>Bugfixes:</b><br />
        <ul>
          <li>Fix Transfer Pool return values</li>
          <li>Stopped returning default backups window for Linodes
            <ul>
              <li>This impacted Linodes that were still scheduling backups only</li>
            </ul>
          </li>
          <li>Don't set cancel_account grant when it's not requested</li>
          <li>Suppresses shutdown event notification for rebuild</li>
          <li>Send emails for TFA to the acting user</li>
        </ul>
        <h2>2018-01-08</h2>
        <hr /><br />
        <b>Breaking:</b><br />
        <ul>
          <li>Update /linode/distributions and /image responses
            <ul>
              <li>remove status key</li>
              <li>remove filesystem key</li>
              <li>remove last_used key</li>
              <li>rename creator -> created_by (string)</li>
              <li>rename min_deploy_size -> size (int)</li>
            </ul>
          </li>
        </ul>
        <b>Features:</b><br />
        <ul>
          <li>Added enable, disable managed service endpoints
            <ul>
              <li>Added POST /managed/services/:id/enable</li>
              <li>Added POST /managed/services/:id/disable</li>
              <li>Added status to managed service JSON response object</li>
            </ul>
          </li>
          <li>Added GET /managed/stats endpoint</li>
          <li>Added PUT /managed/linode_settings</li>
          <li>Added PUT endpoints to managed service</li>
          <li>Add managed_issue_type to support/tickets/
            <ul>
              <li>GET /support/tickets returns new managed_issue_type key</li>
              <li>POST /support/tickets now accepts this key if the account has
              Managed Services enabled</li>
            </ul>
          </li>
          <li>Added GET /managed/issues and GET /managed/issues/:id
            <ul>
              <li>GET /managed/issues returns all issues, including relevant history</li>
              <li>GET /managed/issues/:id returns a single issue</li>
              <li>Since managed issues are backed by support tickets, uses the ticket ID</li>
            </ul>
          </li>
          <li> Added vat_number to  /account/settings
            <ul>
              <li>Can be viewed and updated</li>
            </ul>
          </li>
          <li>Sends emails when enabling/disabling TFA</li>
          <li>Rendered zone file returned in Domain object</li>
          <li>Added DELETE /managed/services/:id endpoint</li>
          <li>Added DELETE /managed/contacts/:id</li>
        </ul>
        <b>Bugfixes:</b><br />
        <ul>
          <li>Allow filtering of GET /images</li>
        </ul>
        <h2>2017-11-20</h2>
        <hr /><br />
        <b>Breaking Changes:</b><br />
        <ul>
          <li>Reworked UserGrant system
            <ul>
              <li>Three Grant levels are now enforced: No grants, "read_only", and "read_write"</li>
              <li>"read_only" allows access to GET endpoints</li>
              <li>"read_write" is equivalent to legacy "all" grant</li>
              <li>Legacy "all" or "access" grants are treated as "read_write"</li>
            </ul>
          </li>
          <li>Changed GET /account/users/:username/grants
            <ul>
              <li>Grants response objects now always include "id", "label" and "permissions"</li>
              <li>"permissions" can be null or an enum of either "read_only" or "read_write"</li>
            </ul>
          </li>
          <li>Changed PUT /account/users/:username/grants
            <ul>
              <li>Grants now accepted in the new format detailed above</li>
            </ul>
          </li>
          <li>Changed GET /profile/grants
            <ul>
              <li>Grants returned in new format detailed above</li>
            </ul>
          </li>
        </ul>
        <b>Changes:</b>
        <ul>
          <li>Added support for CAA Domain records</li>
          <li>Changed POST /linode/instances/:id/disks
            <ul>
              <li>Now accepts "image" - an image ID to deploy from</li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <h2>2017-12-11</h2>
        <hr /><br />
        <b>Breaking:</b><br />
        <ul>
          <li>Unify Distributions and Images
            <ul>
              <li>Removes Distribution.architecture</li>
              <li>Renames Distribution.updated to last_used (Datetime)</li>
              <li>Renames Distribution.disk_minimum to min_deploy_size (Integer)</li>
              <li>Adds Distribution.filesystem (String)</li>
              <li>Adds Distribution.created (Datetime)</li>
              <li>Adds Distribution.description (String)</li>
              <li>Adds Distribution.status (String)</li>
              <li>Adds Distribution.type (String)</li>
              <li>Adds Distribution.is_public (Boolean)</li>
              <li>Adds Distribution.creator (String)</li>
              <li>Adds Image.deprecated (Boolean)</li>
            </ul>
          </li>
          <li>Renamed "distribution" to "image"
            <ul>
              <li>POST /linode/instances takes "image" instead of "distribution"</li>
              <li>POST /linode/instances/:id/disks takes "image" instead of "distribution"</li>
              <li>POST /linode/instances/:id/rebuild takes "image" instead of "distribution"</li>
              <li>Linode object returns "image" instead of "distribution"</li>
              <li>StackScript object returns "images" instead of "distributions"</li>
            </ul>
          </li>
          <li>Change Image IDs to Slugs
            <ul>
              <li>slugs match the format private/:image_id</li>
            </ul>
          </li>
          <li>Moved volumes to top level
            <ul>
              <li>Changed all references from /linode/volumes to /volumes</li>
            </ul>
          </li>
        </ul>
        <b>Features:</b><br />
        <ul>
          <li>Added POST account/payments/paypal
            <ul>
              <li>Stages a PayPal payment and returns the payment_id</li>
            </ul>
          </li>
          <li>Added POST account/payments/paypal/execute
            <ul>
              <li>Execute a PayPal payment that has been authorized in PayPal</li>
              <li>This is required for Linode to capture funds and credit your account</li>
            </ul>
          </li>
          <li>Added POST /domains/$id/clone
            <ul>
              <li>New endpoint can be reached at POST domains/:domain_id/clone</li>
              <li>Requires a new domain be provided in the post body</li>
            </ul>
          </li>
        </ul>
        <b>Bugfixes:</b><br />
        <ul>
          <li>Ensure POST domain/records accepts and honors ttl_sec</li>
          <li>Fixed Linode create from a Stackscript using UDFs</li>
        </ul>
        <h2>2017-11-20</h2>
        <hr /><br />
        <b>Breaking Changes:</b><br />
        <ul>
          <li>Reworked UserGrant system
            <ul>
              <li>Three Grant levels are now enforced: No grants, read_only, and read_write</li>
              <li>read_only allows access to GET endpoints</li>
              <li>read_write is equivalent to legacy "all" grant</li>
              <li>Legacy "all" or "access" grants are treated as read_write</li>
            </ul>
          </li>
          <li>Changed GET /account/users/:username/grants
            <ul>
              <li>Grants response objects now always include "id", "label" and "permissions"</li>
              <li>"permissions" can be null or an enum of either "read_only" or "read_write"</li>
            </ul>
          </li>
          <li>Changed PUT /account/users/:username/grants
            <ul>
              <li>Grants now accepted in the new format detailed above</li>
            </ul>
          </li>
          <li>Changed GET /profile/grants
            <ul>
              <li>Grants returned in new format detailed above</li>
            </ul>
          </li>
        </ul>
        <b>Changes:</b>
        <ul>
          <li>Added support for CAA Domain records</li>
          <li>Changed POST /linode/instances/:id/disks
            <ul>
              <li>Now accepts "image" - an image ID to deploy from</li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <h2>2017-10-23</h2>
        <hr /><br />
        <b>Breaking Changes:</b><br />
        <ul>
          <li>Changed POST /account/payments
            <ul>
              <li>Now accepts "usd" as a string representing a dollar amount, including cents</li>
              <li>Valid values include "0.10", "10.00", "100.20", and "$1.00"</li>
              <li>Invalid values include 10, 10.01, "10", "10.001", and "10.0"</li>
            </ul>
          </li>
        </ul>
        <b>Changes:</b><br />
        <ul>
          <li>Added GET /account/notifications
            <ul>
              <li>Read-only collection of Notification objects</li>
              <li>Returns important information about your account that may require action</li>
            </ul>
          </li>
          <li>Added GET /images
            <ul>
              <li>Lists images on your account</li>
            </ul>
          </li>
          <li>Added GET /images/:id
            <ul>
              <li>View a single image on your account</li>
            </ul>
          </li>
          <li>Added PUT /images/:id
            <ul>
              <li>Update an image on your account</li>
            </ul>
          </li>
          <li>Added DELETE /images/:id
            <ul>
              <li>Deleted an image you own</li>
            </ul>
          </li>
          <li>Added POST /linode/instances/:id/disks/:id/imagize
            <ul>
              <li>Creates a new image from a disk you own</li>
            </ul>
          </li>
          <li>Added GET /longview/clients
            <ul>
              <li>Returns a list of Longview clients on your account</li>
            </ul>
          </li>
          <li>Added POST /longview/clients
            <ul>
              <li>Creates a new Longview client on your account</li>
            </ul>
          </li>
          <li>Added GET /longview/clients/:id
            <ul>
              <li>Returns information on a single Longview client</li>
            </ul>
          </li>
          <li>Added PUT /longview/clients/:id
            <ul>
              <li>Update a single Longview client</li>
            </ul>
          </li>
          <li>Added DELETE /longview/clients/:id
            <ul>
              <li>Removes a longview client from your account</li>
            </ul>
          </li>
          <li>Added GET /longview/subscriptions
            <ul>
              <li>Returns all available longview subscription tiers</li>
            </ul>
          </li>
          <li>Added GET /longview/subscriptions/:id
            <ul>
              <li>Returns information one longview subscription tier</li>
            </ul>
          </li>
          <li>Changed GET /account/settings
            <ul>
              <li>Added "longview_subscription" - the tier at which you are subscribed
              to longview</li>
            </ul>
          </li>
          <li>Changed PUT /account/settings
            <ul>
              <li>Sending in "null" or an id to "longview_subscription" changes your longview
              subscription tier.</li>
            </ul>
          </li>
          <li>Change POST /linode/instances
            <ul>
              <li>Now accepts image - the ID of an image to deploy the linode with</li>
              <li>Only one source attribute may be provided</li>
            </ul>
          </li>
          <li>Changed POST /linode/instances/:id/rebuild
            <ul>
              <li>Now accepts image - the ID of an image to rebuild the linode with</li>
              <li>Only one source attribute may be provided</li>
            </ul>
          </li>
          <li>Added events for enabling/disabling TFA</li>
          <li>Added Longview and Image grants to GET /users/:id/grants and GET /profile/grants
            <ul>
              <li>Response now includes "longview" attribute whose value is an array of
              grants your user has that relate to longview clients</li>
              <li>Response now includes an "images" attribute whose value is an array of
              grants your user has that relate to images</li>
              <li>Only applies to restricted users</li>
            </ul>
          </li>
          <li>Event objects may now have Longview clients or Images as their entities</li>
        </ul>
      </section>
      <section>
        <h2>2017-10-04</h2>
        <hr /><br />
        <b>Breaking Changes:</b><br />
        <ul>
          <li> EventType has changed from "blockstorage_*" to "volume_*"</li>
          <li> Changed POST linode/instances/:id/configs
            <ul>
              <li> Removed root_device_ro </li>
              <li> Now accepts "helpers", a dict accepting any/all of "updatedb_disabled",
              "distro", "modules_dep", "network", and "devtmpfs_automount" </li>
              <li> Removed devtmpfs_automount (now in helpers envelope) </li>
            </ul>
          </li>
          <li> Changed POST linode/instances/:id/disks
            <ul>
              <li> root_ssh_key changed to "authorized_keys", now accepts a list of keys instead
              of a single string key </li>
            </ul>
          </li>
          <li> Changed POST linode/instances
            <ul>
              <li> root_ssh_key changed to "authorized_keys", now accepts a list of keys instead
              of a single string key </li>
            </ul>
          </li>
          <li> Changed POST linode/instances/:id/rebuild
            <ul>
              <li> root_ssh_key changed to "authorized_keys", now accepts a list of keys instead
              of a single string key </li>
            </ul>
          </li>
          <li> Changed POST linode/instances/:id/rescue
            <ul>
              <li> disks changed to "devices", now accepts device mappings in the same format
              as POST linode/instances/:id/configs </li>
            </ul>
          </li>
          <li> Changed Linode object
            <ul>
              <li> Moved "disk", "memory", "storage", "transfer_total", and "vcpus" into a
              "specs" envelope </li>
              <li> transfer_total => transfer in linode specs </li>
              <li> transfer_in => network_in </li>
              <li> transfer_out => network_out </li>
            </ul>
          </li>
          <li> Changed LinodeConfig object
            <ul>
              <li> Removed root_device_ro </li>
            </ul>
          </li>
          <li> Changed LinodeType object
            <ul>
              <li> Moved backups_option.price_hourly to addons.backups.price.hourly </li>
              <li> Moved backups_option.price_monthly to addons.backups.price.monthly </li>
              <li> Moved price_hourly to price.hourly </li>
              <li> Moved price_monthly to price.monthly </li>
            </ul>
          </li>
          <li> Changed OAuthToken
            <ul>
              <li> Removed client envelope </li>
              <li> Removed type </li>
            </ul>
          </li>
          <li> Changed account/tokens
            <ul>
              <li> Endpoint moved to profile/tokens </li>
              <li> GET now only returns Personal Access Tokens </li>
            </ul>
          </li>
          <li> Changed account/clients
            <ul>
              <li> Endpoint moved to account/oauth-clients </li>
              <li> Collection now allows access to all clients for all users on your account
              if you are an unrestricted user </li>
            </ul>
          </li>
        </ul>
        <b>Changes:</b><br />
        <ul>
          <li> Added profile/apps
            <ul>
              <li> Collection of authorized third-party applications </li>
            </ul>
          </li>
          <li> OAuthClient now has a "public" attribute
            <ul>
              <li> "public" is an optional argument to POST account/clients that
              defaults to False </li>
            </ul>
          </li>
          <li> Added POST account/credit-card
            <ul>
              <li> Updates current payment method on file </li>
            </ul>
          </li>
          <li> Added GET account/payments
            <ul>
              <li> Returns a list of all payments made for your account </li>
            </ul>
          </li>
          <li> Added GET account/payments/:id
            <ul>
              <li> Returns information about a single payment made for your account </li>
            </ul>
          </li>
          <li> Added POST linode/volumes/:id/clone </li>
          <li> Changed Disk Status
            <ul>
              <li> Now always one of "ready", "not ready", or "deleting" </li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <h2>2017-09-18</h2>
        <hr /><br />
        <b>Breaking Changes:</b><br />
        <ul>
          <li>Pagination envelope has changed
            <ul>
              <li> total_pages => pages</li>
              <li> total_results => results</li>
              <li> endpoint-specific key is now always "data"</li>
            </ul>
          </li>
          <li>Region, Distribution, Type, and Kernel objects are now returned as slugs
            <ul>
              <li> Previously, entire object was returned as part of other responses</li>
            </ul>
          </li>
          <li>POST linode/instances and POST linode/rebuild automatically issue a boot job
            <ul>
              <li> This behavior can be suppressed by sending "boot": false in the request</li>
            </ul>
          </li>
          <li>Changed POST linode/instances
            <ul>
              <li> with_backups => backups_enabled</li>
              <li> Now accepts "booted" - defaults to true if distribution is provided</li>
            </ul>
          </li>
          <li>Changed POST  linode/instances/:id/clone
            <ul>
              <li> with_backups => backups_enabled</li>
            </ul>
          </li>
          <li>Changed POST linode/instances/:id/rebuild
            <ul>
              <li> Now accepts "booted" - defaults to true</li>
            </ul>
          </li>
          <li>Changed LinodeNetworkingResponse
            <ul>
              <li> region is now a slug instead of a nested object</li>
            </ul>
          </li>
          <li>Changed IPv6 object
            <ul>
              <li> region is now a slug instead of a nested object</li>
            </ul>
          </li>
          <li>Changed Invoice object
            <ul>
              <li> Removed "paid"</li>
              <li> Removed "overdue"</li>
            </ul>
          </li>
          <li>Changed Region object
            <ul>
              <li> Removed "label"</li>
            </ul>
          </li>
          <li>Changed Backup object
            <ul>
              <li> regions is now a slug instead of a nested object</li>
            </ul>
          </li>
          <li>Changed Distribution object
            <ul>
              <li> Removed "created"</li>
              <li> Added "updated"</li>
              <li> minimum_storage_size => disk_minimum</li>
              <li> x64 => architecture.  architecture is an enum returning either
              "x86_64" or "i386"</li>
            </ul>
          </li>
          <li>Changed IPAddress object
            <ul>
              <li> region is now a slug instead of a nested object</li>
            </ul>
          </li>
          <li>Changed Kernel object
            <ul>
              <li> x64 => architecture.  architecture is an enum returning either
              "x86_64" or "i386"</li>
            </ul>
          </li>
          <li>Changed Linode object
            <ul>
              <li> storage => disk</li>
              <li> total_transfer => transfer_total</li>
              <li> distribution is now a slug instead of a nested object</li>
              <li> region is now a slug instead of a nested object</li>
              <li> nested alert objects have been streamlined</li>
              <li>"enabled" and "threshold" have been removed</li>
              <li>a value of 0 now represents "disabled", any other value is "enabled" with
              that threshold</li>
            </ul>
          </li>
          <li>Changed LinodeConfig object
            <ul>
              <li> disable_updatedb => updatedb_disabled</li>
              <li> enable_distro_helper => distro</li>
              <li> enable_modules_dep_helper => modules_dep</li>
              <li> enable_network_helper => network</li>
              <li> ram_limit => memory_limit</li>
              <li> devtmpfs_autocommit moved into "helpers" envelope</li>
            </ul>
          </li>
          <li>Changed Nodebalancer object
            <ul>
              <li> region is now a slug instead of a nested object</li>
            </ul>
          </li>
          <li>Changed Type object
            <ul>
              <li> hourly_price => price_hourly</li>
              <li> monthly_price => price_monthly</li>
              <li> ram => memory</li>
              <li> storage => disk</li>
              <li> mbits_out => network_out</li>
              <li> backups_price is now a nested object containing "price_hourly" and
              "price_monthly"</li>
            </ul>
          </li>
          <li>Changed StackScript object
            <ul>
              <li> Removed "customer_id"</li>
              <li> distributions is now a list of slugs instead of a list of nested objects</li>
              <li> Removed "user_id"</li>
              <li> Added "username"</li>
              <li> Added "user_gravatar_id"</li>
            </ul>
          </li>
          <li>Changed Volume object
            <ul>
              <li> "status" can no longer contain "contact_support" - will return "offline"
              in that case</li>
              <li> region is now a slug instead of a nested object</li>
            </ul>
          </li>
          <li>Changes SupportTicket
            <ul>
              <li> Removed "closed_by"</li>
            </ul>
          </li>
          <li>IP Whitelist may not be enabled in PUT profile if it is already disabled</li>
        </ul>
        <b>Changes:</b><br />
        <ul>
          <li>Default page size increased to 100
            <ul>
              <li>Any page size between 25 and 100 may be requested in the url with ?page_size=</li>
            </ul>
          </li>
          <li>Linode configs now accept deprecated kernels</li>
          <li>Linode configs now default kernel to latest, no longer required on POST</li>
          <li>Added /profile/whitelist
            <ul>
              <li>GET - list all IPs on user's whitelist</li>
              <li>POST - add IP to user's whitelist</li>
              <li>Endpoint return a 400 if IP Whitelist is disabled</li>
            </ul>
          </li>
          <li>Added /profile/whitelist/:id
            <ul>
              <li>GET - return one entry on whitelist</li>
              <li>DELETE - remove address from whitelist</li>
              <li>Endpoints return a 400 if IP Whitelist if disabled</li>
            </ul>
          </li>
          <li>Disk filesystems now default to ext4, no longer required on POST</li>
        </ul>
      </section>
      <div className="text-sm-center">
        <Link to={`/${API_VERSION}/introduction`}>
          Go on to the Introduction
        </Link>
      </div>
    </section>
  );
}

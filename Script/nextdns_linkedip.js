//Script event auto linked ipv4 nextdns: network-change

$httpClient.post('https://link-ip.nextdns.io/10110/a9eae90f59dd3j88', function(error, response, data){
  if (error) {
$notification.post('NEXT DNS ', 'Internet error','');
    $done({});
  } else {
$notification.post('NEXT DNS ', 'IPv4 (with linked IP)', 'ip :' + data);
    $done({});
  }
});
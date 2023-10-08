# [unrated] qr code - 181903 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181903) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.07 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p style="user-select: auto;">두 정수 <code style="user-select: auto;">q</code>, <code style="user-select: auto;">r</code>과 문자열 <code style="user-select: auto;">code</code>가 주어질 때, <code style="user-select: auto;">code</code>의 각 인덱스를 <code style="user-select: auto;">q</code>로 나누었을 때 나머지가 <code style="user-select: auto;">r</code>인 위치의 문자를 앞에서부터 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.</p>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">제한사항</h5>

<ul style="user-select: auto;">
<li style="user-select: auto;">0 ≤ <code style="user-select: auto;">r</code> &lt; <code style="user-select: auto;">q</code> ≤ 20</li>
<li style="user-select: auto;"><code style="user-select: auto;">r</code> &lt; <code style="user-select: auto;">code</code>의 길이 ≤ 1,000</li>
<li style="user-select: auto;"><code style="user-select: auto;">code</code>는 영소문자로만 이루어져 있습니다.</li>
</ul>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예</h5>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">q</th>
<th style="user-select: auto;">r</th>
<th style="user-select: auto;">code</th>
<th style="user-select: auto;">result</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">3</td>
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">"qjnwezgrpirldywt"</td>
<td style="user-select: auto;">"jerry"</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">0</td>
<td style="user-select: auto;">"programmers"</td>
<td style="user-select: auto;">"programmers"</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예 설명</h5>

<p style="user-select: auto;">입출력 예 #1</p>

<ul style="user-select: auto;">
<li style="user-select: auto;"><p style="user-select: auto;">예제 1번의 <code style="user-select: auto;">q</code>와 <code style="user-select: auto;">r</code>은 각각 3, 1이고 인덱스와 그 값을 <code style="user-select: auto;">q</code>로 나눈 나머지가 잘 보이도록 표로 만들면 다음과 같습니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;"><code style="user-select: auto;">code</code></th>
<th style="user-select: auto;">q</th>
<th style="user-select: auto;">j</th>
<th style="user-select: auto;">n</th>
<th style="user-select: auto;">w</th>
<th style="user-select: auto;">e</th>
<th style="user-select: auto;">z</th>
<th style="user-select: auto;">g</th>
<th style="user-select: auto;">r</th>
<th style="user-select: auto;">p</th>
<th style="user-select: auto;">i</th>
<th style="user-select: auto;">r</th>
<th style="user-select: auto;">l</th>
<th style="user-select: auto;">d</th>
<th style="user-select: auto;">y</th>
<th style="user-select: auto;">w</th>
<th style="user-select: auto;">t</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">index</td>
<td style="user-select: auto;">0</td>
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">3</td>
<td style="user-select: auto;">4</td>
<td style="user-select: auto;">5</td>
<td style="user-select: auto;">6</td>
<td style="user-select: auto;">7</td>
<td style="user-select: auto;">8</td>
<td style="user-select: auto;">9</td>
<td style="user-select: auto;">10</td>
<td style="user-select: auto;">11</td>
<td style="user-select: auto;">12</td>
<td style="user-select: auto;">13</td>
<td style="user-select: auto;">14</td>
<td style="user-select: auto;">15</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;"><code style="user-select: auto;">q</code>로 나눈 나머지</td>
<td style="user-select: auto;">0</td>
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">0</td>
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">0</td>
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">0</td>
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">0</td>
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">0</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;"><code style="user-select: auto;">q</code>로 나눈 나머지가 1인 인덱스의 문자들을 앞에서부터 순서대로 이어 붙이면 "jerry"가 되므로 이를 return 합니다.</p></li>
</ul>

<p style="user-select: auto;">입출력 예 #2</p>

<ul style="user-select: auto;">
<li style="user-select: auto;"><p style="user-select: auto;">예제 2번의 <code style="user-select: auto;">q</code>와 <code style="user-select: auto;">r</code>은 각각 1, 0이고 인덱스와 그 값을 <code style="user-select: auto;">q</code>로 나눈 나머지가 잘 보이도록 표로 만들면 다음과 같습니다.</p>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;"><code style="user-select: auto;">code</code></th>
<th style="user-select: auto;">p</th>
<th style="user-select: auto;">r</th>
<th style="user-select: auto;">o</th>
<th style="user-select: auto;">g</th>
<th style="user-select: auto;">r</th>
<th style="user-select: auto;">a</th>
<th style="user-select: auto;">m</th>
<th style="user-select: auto;">m</th>
<th style="user-select: auto;">e</th>
<th style="user-select: auto;">r</th>
<th style="user-select: auto;">s</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">index</td>
<td style="user-select: auto;">0</td>
<td style="user-select: auto;">1</td>
<td style="user-select: auto;">2</td>
<td style="user-select: auto;">3</td>
<td style="user-select: auto;">4</td>
<td style="user-select: auto;">5</td>
<td style="user-select: auto;">6</td>
<td style="user-select: auto;">7</td>
<td style="user-select: auto;">8</td>
<td style="user-select: auto;">9</td>
<td style="user-select: auto;">10</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;"><code style="user-select: auto;">q</code>로 나눈 나머지</td>
<td style="user-select: auto;">0</td>
<td style="user-select: auto;">0</td>
<td style="user-select: auto;">0</td>
<td style="user-select: auto;">0</td>
<td style="user-select: auto;">0</td>
<td style="user-select: auto;">0</td>
<td style="user-select: auto;">0</td>
<td style="user-select: auto;">0</td>
<td style="user-select: auto;">0</td>
<td style="user-select: auto;">0</td>
<td style="user-select: auto;">0</td>
</tr>
</tbody>
      </table>
<p style="user-select: auto;"><code style="user-select: auto;">q</code>로 나눈 나머지가 1인 인덱스의 문자들을 앞에서부터 순서대로 이어 붙이면 "programmers"가 되므로 이를 return 합니다.</p></li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
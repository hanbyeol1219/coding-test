# [unrated] A 강조하기 - 181874 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181874) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.03 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

Empty

### 문제 설명

<p style="user-select: auto;">문자열 <code style="user-select: auto;">myString</code>이 주어집니다. <code style="user-select: auto;">myString</code>에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.</p>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">제한사항</h5>

<ul style="user-select: auto;">
<li style="user-select: auto;">1 ≤ <code style="user-select: auto;">myString</code>의 길이 ≤ 20

<ul style="user-select: auto;">
<li style="user-select: auto;"><code style="user-select: auto;">myString</code>은 알파벳으로 이루어진 문자열입니다.</li>
</ul></li>
</ul>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예</h5>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">myString</th>
<th style="user-select: auto;">result</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">"abstract algebra"</td>
<td style="user-select: auto;">"AbstrAct AlgebrA"</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">"PrOgRaMmErS"</td>
<td style="user-select: auto;">"progrAmmers"</td>
</tr>
</tbody>
      </table>
<h5 style="user-select: auto;">입출력 예 설명</h5>

<p style="user-select: auto;">입출력 예 #1</p>

<ul style="user-select: auto;">
<li style="user-select: auto;">0번, 5번, 9번, 15번 인덱스의 "a"는 소문자이므로 전부 대문자로 고쳐줍니다.</li>
<li style="user-select: auto;">다른 문자들은 전부 "a"가 아닌 소문자이므로 바꾸지 않습니다.</li>
<li style="user-select: auto;">따라서 "AbstrAct AlgebrA"를 return 합니다.</li>
</ul>

<p style="user-select: auto;">입출력 예 #2</p>

<ul style="user-select: auto;">
<li style="user-select: auto;">0번, 2번, 4번, 6번, 8번, 10번 인덱스의 문자들은 "A"가 아닌 대문자이므로 전부 소문자로 고쳐줍니다.</li>
<li style="user-select: auto;">5번 인덱스의 "a"는 소문자이므로 대문자로 고쳐줍니다.</li>
<li style="user-select: auto;">다른 문자들은 전부 "a"가 아닌 소문자이므로 바꾸지 않습니다.</li>
<li style="user-select: auto;">따라서 "progrAmmers"를 return 합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
var merge = function(nums1, m, nums2, n) {
 
        let i = m + n - 1;
        m--;
        n--;
        while (n >= 0) {
            if (m < 0 || nums1[m] < nums2[n]) {
                nums1[i--] = nums2[n--];
            } else {
                nums1[i--] = nums1[m--];
            }
        }
    }
